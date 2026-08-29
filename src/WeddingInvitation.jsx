import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bungaLily from "./assets/bungalily.png";
import daunEmas from "./assets/daunemas.png";
import goldRose from "./assets/goldrose.png";
import { supabase, isSupabaseConfigured } from "./lib/supabase";
import {
  couple,
  weddingDate,
  venue,
  mapsEmbedUrl,
  mapsLinkUrl,
  events,
  quran,
  prayers,
  giftAccounts,
  giftAddress,
  footerHadith,
  music,
} from "./data/wedding";

const LOCAL_KEY = "guestbook_maudya_rama";
const LAST_SUBMIT_KEY = "guestbook_last_submit";
const MIN_FILL_MS = 3000;
const COOLDOWN_MS = 30_000;
const URL_PATTERN = /(https?:\/\/|www\.)/i;
const MAX_GUEST_NAME_LENGTH = 60;

const formatGuestName = (raw) => {
  if (!raw) return "";
  try {
    const decoded = decodeURIComponent(raw).slice(0, MAX_GUEST_NAME_LENGTH);
    const cleaned = decoded
      .replace(/[-_+]+/g, " ")
      .replace(/[^\p{L}\p{N}\s.&,'()]/gu, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!cleaned) return "";
    return cleaned
      .split(" ")
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
      .join(" ");
  } catch {
    return "";
  }
};

const relativeTime = (iso) => {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "Baru Saja";
  const diff = Date.now() - then;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "Baru Saja";
  if (minutes < 60) return `${minutes} Menit Yang Lalu`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} Jam Yang Lalu`;
  const days = Math.floor(hours / 24);
  return `${days} Hari Yang Lalu`;
};

// attendance: UI pakai label, database pakai enum.
const toLabel = (value) => (value === "tidak_hadir" ? "Tidak Hadir" : "Hadir");
const toEnum = (label) => (label === "Tidak Hadir" ? "tidak_hadir" : "hadir");

// Hiasan daun emas di sudut kanan atas & kiri bawah frame
const FrameLeaves = () => (
  <>
    <img src={daunEmas} alt="" className="absolute top-3 right-3 w-10 h-10 md:w-14 md:h-14 opacity-70 pointer-events-none select-none z-10 brightness-110" />
    <img src={daunEmas} alt="" className="absolute bottom-3 left-3 w-10 h-10 md:w-14 md:h-14 opacity-70 pointer-events-none select-none z-10 transform rotate-180 brightness-110" />
  </>
);

// Pembatas garis emas dengan bunga rose berputar
const GoldenSectionDivider = () => (
  <div className="py-8 flex items-center justify-center space-x-4 max-w-xs md:max-w-md mx-auto relative z-20">
    <div className="h-[1.5px] bg-gradient-to-r from-transparent via-[#c69d66]/70 to-[#c69d66] flex-1"></div>
    <img src={goldRose} alt="" className="w-10 h-10 md:w-14 md:h-14 object-contain animate-spin pointer-events-none select-none drop-shadow-md brightness-110" style={{ animationDuration: "14s" }} />
    <div className="h-[1.5px] bg-gradient-to-l from-transparent via-[#c69d66]/70 to-[#c69d66] flex-1"></div>
  </div>
);

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [guestName, setGuestName] = useState("Bapak/Ibu/Saudara/i");
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [attendance, setAttendance] = useState("Hadir");
  const [activeSection, setActiveSection] = useState("home");

  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });
  const [visibleWishesCount, setVisibleWishesCount] = useState(5);

  const [wishes, setWishes] = useState([]);
  const [formName, setFormName] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formWebsite, setFormWebsite] = useState(""); // honeypot — harus tetap kosong
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [sent, setSent] = useState(false);

  const audioRef = useRef(null);
  const mountedAt = useRef(Date.now());
  const usingSupabase = isSupabaseConfigured();

  const navItems = [
    { id: "home", label: "Home", icon: "fas fa-heart" },
    { id: "couple", label: "Couple", icon: "fas fa-user-friends" },
    { id: "doa", label: "Doa", icon: "fas fa-hand-holding-heart" },
    { id: "date", label: "Date", icon: "fas fa-calendar-alt" },
    { id: "event", label: "Event", icon: "fas fa-glass-cheers" },
    { id: "location", label: "Location", icon: "fas fa-map-marker-alt" },
    { id: "wishes", label: "Wishes", icon: "fas fa-comment-dots" },
    { id: "gift", label: "Gift", icon: "fas fa-gift" },
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const recipient = formatGuestName(params.get("untuk") || params.get("to"));
    if (recipient) setGuestName(recipient);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const targetDate = new Date(weddingDate.iso).getTime();
    const tick = () => {
      const difference = targetDate - Date.now();
      if (difference > 0) {
        setTimeLeft({
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
          hours: String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
          minutes: String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
          seconds: String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, "0"),
        });
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  // Muat ucapan: Supabase kalau dikonfigurasi, kalau tidak jatuh ke localStorage.
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      if (usingSupabase) {
        const { data, error } = await supabase
          .from("guestbook")
          .select("id, name, message, attendance, created_at")
          .order("created_at", { ascending: false })
          .limit(100);
        if (cancelled || error) return;
        setWishes(
          data.map((row) => ({
            id: row.id,
            name: row.name,
            message: row.message,
            attendance: toLabel(row.attendance),
            time: relativeTime(row.created_at),
          }))
        );
      } else {
        const saved = localStorage.getItem(LOCAL_KEY);
        if (saved && !cancelled) setWishes(JSON.parse(saved));
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [usingSupabase]);

  useEffect(() => {
    if (!isOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          /* autoplay diblokir browser */
        });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleWishSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setFormError("");

    // Honeypot: hanya bot yang mengisi field tersembunyi ini.
    if (formWebsite) {
      setFormName("");
      setFormMessage("");
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      return;
    }

    // Waktu isi form: bot mengirim seketika.
    if (Date.now() - mountedAt.current < MIN_FILL_MS) {
      setFormError("Mohon isi form sedikit lebih lama, terima kasih.");
      return;
    }

    // Jeda antar kiriman per browser.
    const last = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0);
    const remaining = COOLDOWN_MS - (Date.now() - last);
    if (remaining > 0) {
      setFormError(`Mohon tunggu ${Math.ceil(remaining / 1000)} detik sebelum mengirim ucapan lagi.`);
      return;
    }

    // Filter tautan: mayoritas spam menyertakan link.
    if (URL_PATTERN.test(formMessage) || URL_PATTERN.test(formName)) {
      setFormError("Mohon maaf, link tidak diperbolehkan dalam ucapan.");
      return;
    }

    const payload = {
      name: formName.trim(),
      message: formMessage.trim(),
      attendance: toEnum(attendance),
    };
    if (!payload.name || !payload.message) return;

    setSending(true);

    if (usingSupabase) {
      const { data, error } = await supabase
        .from("guestbook")
        .insert(payload)
        .select("id, name, message, attendance, created_at")
        .single();

      setSending(false);
      if (error) {
        setFormError("Gagal mengirim ucapan. Silakan coba lagi.");
        return;
      }
      setWishes((prev) => [
        { id: data.id, name: data.name, message: data.message, attendance: toLabel(data.attendance), time: "Baru Saja" },
        ...prev,
      ]);
    } else {
      const next = [
        { id: Date.now(), name: payload.name, message: payload.message, attendance, time: "Baru Saja" },
        ...wishes,
      ];
      setWishes(next);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
      setSending(false);
    }

    localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));
    setFormName("");
    setFormMessage("");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const handleReadMoreWishes = () => setVisibleWishesCount((prev) => prev + 5);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    alert(`${label} berhasil disalin!`);
  };

  const cardStyle =
    "bg-gradient-to-b from-[#4a2226] via-[#38171a] to-[#290e11] border border-[#c69d66]/40 rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(84,33,37,0.5)] hover:border-[#c69d66] relative overflow-hidden group text-[#f5ebe6]";

  const [akad, resepsi] = events;
  const eventCards = [
    { ...akad, icon: "fas fa-calendar-check" },
    { ...resepsi, icon: "fas fa-glass-cheers" },
  ];

  return (
    <div className="bg-[#1a0709] text-[#f5ebe6] font-sans antialiased relative selection:bg-[#c69d66]/30">
      <audio ref={audioRef} loop preload="auto" src={music.src}></audio>

      {/* Floating Music Controller */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-40 transition-all duration-300">
          <div className="bg-[#2e1013]/90 backdrop-blur-md border border-[#c69d66]/50 rounded-full px-4 py-2 shadow-lg flex items-center space-x-3">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
              className="w-9 h-9 bg-[#c69d66] text-[#1f090b] rounded-full flex items-center justify-center text-sm shadow hover:scale-105 transition"
            >
              <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
            </button>
            <div className="flex items-end space-x-1 h-4 px-1">
              <span className={`w-1 bg-[#c69d66] rounded-full ${isPlaying ? "bar-anim" : "h-1"}`}></span>
              <span className={`w-1 bg-[#c69d66] rounded-full ${isPlaying ? "bar-anim" : "h-1"}`}></span>
              <span className={`w-1 bg-[#c69d66] rounded-full ${isPlaying ? "bar-anim" : "h-1"}`}></span>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Navbar */}
      {isOpen && (
        <nav className="fixed top-0 left-0 right-0 z-30 bg-[#290e11]/90 backdrop-blur-md border-b border-[#c69d66]/30 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="#home" className="font-script text-2xl text-[#c69d66] font-bold">
              {couple.shortNames}
            </a>
            <div className="hidden md:flex items-center space-x-6 text-xs font-medium tracking-wider uppercase">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`transition-all duration-300 flex items-center space-x-1 py-1 border-b-2 ${
                    activeSection === item.id ? "text-[#c69d66] font-bold border-[#c69d66] scale-105" : "text-[#d8c2b8] hover:text-[#c69d66] border-transparent"
                  }`}
                >
                  <i className={`${item.icon} mr-1`}></i>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* ==================== COVER MODAL ==================== */}
      <section
        className={`fixed inset-0 z-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#542125] via-[#381417] to-[#1f090b] flex flex-col items-center justify-center text-center p-6 transition-transform duration-1000 overflow-hidden ${
          isOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <FrameLeaves />

        <img src={bungaLily} alt="" className="absolute -top-12 -left-12 w-72 h-72 md:w-[420px] md:h-[420px] opacity-25 pointer-events-none select-none transform -rotate-12 drop-shadow-sm brightness-125" />
        <img src={bungaLily} alt="" className="absolute -bottom-12 -right-12 w-72 h-72 md:w-[420px] md:h-[420px] opacity-25 pointer-events-none select-none transform rotate-180 drop-shadow-sm brightness-125" />

        <div data-aos="fade-up" className="max-w-xl w-full relative z-10 flex flex-col items-center">
          <div className="w-12 h-0.5 bg-[#c69d66]/60 mb-4"></div>
          <p className="font-arabic italic text-xl text-[#e8d5c4] mb-2">Bismillahirrahmannirrahim</p>
          <p className="text-xs tracking-wider uppercase text-[#d8c2b8] max-w-sm mb-6 leading-relaxed">Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan resepsi pernikahan</p>

          <h1 className="font-script text-6xl md:text-8xl text-[#c69d66] my-2 tracking-wide drop-shadow-md">{couple.shortNames}</h1>
          <div className="text-[#c69d66] text-xl my-2">
            <i className="fas fa-heart"></i>
          </div>

          <p className="font-serif text-[#f5ebe6] text-xl md:text-2xl font-bold tracking-widest my-2">{weddingDate.compact}</p>
          <span className="text-xs uppercase tracking-widest text-[#d8c2b8] mb-8">{weddingDate.dayName.toUpperCase()}</span>

          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-widest text-[#c69d66] font-semibold mb-2">KEPADA YTH. BAPAK/IBU/SAUDARA/I</p>
            <div className="inline-flex items-center space-x-2 bg-[#290e11]/80 border border-[#c69d66]/50 rounded-full px-6 py-2 shadow-md transition-transform hover:scale-105">
              <i className="fas fa-user-circle text-[#c69d66] text-base"></i>
              <span className="font-script text-2xl text-[#f5ebe6] font-bold">{guestName}</span>
            </div>
            <p className="text-xs italic text-[#d8c2b8] mt-2">Di tempat</p>
          </div>

          <button
            onClick={handleOpenInvitation}
            className="bg-[#c69d66] hover:bg-[#b08853] text-[#1f090b] text-xs font-bold uppercase tracking-wider px-9 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group transform hover:-translate-y-1"
          >
            <i className="fas fa-envelope-open transition group-hover:rotate-12"></i>
            <span>Buka Undangan</span>
          </button>
        </div>
      </section>

      {/* ==================== MAIN CONTENT ==================== */}
      <main className="w-full bg-[#1c080a]">
        {/* ==================== HOME ==================== */}
        <section
          id="home"
          className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 py-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#542125] via-[#381417] to-[#1f090b] overflow-hidden"
        >
          <FrameLeaves />

          <img src={bungaLily} alt="" className="absolute top-2 left-2 w-72 h-72 md:w-[420px] md:h-[420px] opacity-20 pointer-events-none select-none transform -rotate-12 drop-shadow-sm brightness-125" />
          <img src={bungaLily} alt="" className="absolute bottom-2 right-2 w-72 h-72 md:w-[420px] md:h-[420px] opacity-20 pointer-events-none select-none transform rotate-180 drop-shadow-sm brightness-125" />

          <div data-aos="fade-down" className="max-w-xl w-full relative z-10 flex flex-col items-center">
            <div className="w-12 h-0.5 bg-[#c69d66]/60 mb-4"></div>
            <p className="font-arabic italic text-2xl text-[#e8d5c4] mb-2">Bismillahirrahmannirrahim</p>
            <p className="text-xs tracking-wider text-[#d8c2b8] max-w-md mb-6 leading-relaxed">Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan resepsi pernikahan</p>

            <h2 className="font-script text-7xl md:text-9xl text-[#c69d66] my-2 drop-shadow-md">{couple.shortNames}</h2>

            <div className="text-[#c69d66] text-xl my-2">
              <i className="fas fa-heart"></i>
            </div>

            <p className="font-serif text-[#f5ebe6] text-2xl md:text-3xl font-bold tracking-widest my-2">{weddingDate.compact}</p>
            <span className="text-xs uppercase tracking-widest text-[#d8c2b8] mb-10">{weddingDate.dayName.toUpperCase()}</span>

            <a
              href="#couple"
              className="animate-bounce inline-flex items-center space-x-2 bg-[#290e11]/90 backdrop-blur-md border border-[#c69d66]/50 text-[#c69d66] hover:bg-[#3d1619] px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase shadow-md transition-all duration-300 group"
            >
              <span className="text-[#f5ebe6] group-hover:text-[#c69d66]">SCROLL</span>
              <i className="fas fa-chevron-down text-[#c69d66] group-hover:translate-y-0.5 transition-transform"></i>
            </a>
          </div>
        </section>

        <GoldenSectionDivider />

        {/* ==================== COUPLE ==================== */}
        <section id="couple" className="py-20 px-4 max-w-5xl mx-auto relative overflow-hidden">
          <FrameLeaves />

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-script text-5xl text-[#c69d66] mb-1">Mempelai</h2>
            <p className="font-serif italic text-[#d8c2b8] text-sm">The Bride &amp; Groom</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { person: couple.bride, aos: "fade-right" },
              { person: couple.groom, aos: "fade-left" },
            ].map(({ person, aos }) => (
              <div key={person.fullName} className={`${cardStyle} text-center flex flex-col items-center`} data-aos={aos}>
                <div className="w-32 h-32 rounded-full border-2 border-[#c69d66]/50 p-1 mb-6 relative flex items-center justify-center bg-gradient-to-tr from-[#3b171a] to-[#592327] shadow-inner group-hover:scale-105 transition-transform">
                  <span className="font-script text-4xl text-[#c69d66]">{person.initials}</span>
                </div>
                <h3 className="font-script text-4xl text-[#c69d66] mb-1">{person.coverName}</h3>
                <p className="font-serif text-[#f5ebe6] font-bold text-lg mb-2">{person.fullName}</p>
                <div className="text-xs text-[#d8c2b8] space-y-1 my-4">
                  <p className="italic text-[#c69d66]">{person.childOrder}</p>
                  <p className="font-semibold text-[#f5ebe6]">{person.parents.father}</p>
                  <p className="font-semibold text-[#f5ebe6]">&amp; {person.parents.mother}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto" data-aos="fade-up">
            <blockquote className="italic font-serif text-[#d8c2b8] text-sm leading-relaxed mb-3">&ldquo;{quran.translation}&rdquo;</blockquote>
            <span className="text-xs font-semibold text-[#c69d66] tracking-widest uppercase">{quran.source}</span>
          </div>
        </section>

        <GoldenSectionDivider />

        {/* ==================== DOA ==================== */}
        <section id="doa" className="py-20 px-4 max-w-3xl mx-auto text-center relative overflow-hidden">
          <FrameLeaves />

          <div data-aos="fade-up">
            <i className="fas fa-heart text-[#c69d66] text-xl mb-2"></i>
            <h2 className="font-script text-5xl text-[#c69d66] mb-1">Doa untuk Pengantin</h2>
            <p className="font-serif italic text-[#d8c2b8] text-sm mb-12">Doa dan berkah untuk pernikahan yang penuh keberkahan</p>
          </div>

          <div className="space-y-6">
            {prayers.map((prayer) => (
              <div key={prayer.source} className={cardStyle} data-aos="fade-up">
                <p className="font-arabic text-2xl md:text-3xl text-[#e8d5c4] leading-loose mb-4">{prayer.arabic}</p>
                <p className="text-xs italic text-[#d8c2b8] mb-3">&ldquo;{prayer.translation}&rdquo;</p>
                <span className="text-[10px] font-semibold text-[#c69d66] tracking-widest uppercase">{prayer.source}</span>
              </div>
            ))}
          </div>
        </section>

        <GoldenSectionDivider />

        {/* ==================== DATE / COUNTDOWN ==================== */}
        <section id="date" className="py-20 px-4 max-w-4xl mx-auto text-center relative overflow-hidden">
          <FrameLeaves />

          <div data-aos="fade-up">
            <div className="w-12 h-12 rounded-full bg-[#c69d66]/15 text-[#c69d66] flex items-center justify-center mx-auto mb-4 text-xl">
              <i className="fas fa-clock"></i>
            </div>
            <h2 className="font-script text-5xl text-[#c69d66] mb-1">Hitung Mundur</h2>
            <p className="font-serif italic text-[#d8c2b8] text-sm mb-12">Menuju Hari Bahagia</p>
          </div>

          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto mb-8" data-aos="zoom-in">
            {[
              { value: timeLeft.days, label: "HARI" },
              { value: timeLeft.hours, label: "JAM" },
              { value: timeLeft.minutes, label: "MENIT" },
              { value: timeLeft.seconds, label: "DETIK" },
            ].map((unit) => (
              <div key={unit.label} className="bg-gradient-to-b from-[#4a2226] to-[#290e11] p-4 md:p-6 rounded-2xl shadow-md border border-[#c69d66]/30 hover:scale-105 transition-all">
                <span className="font-serif font-bold text-2xl md:text-4xl text-[#c69d66] block">{unit.value}</span>
                <span className="text-[10px] md:text-xs font-semibold text-[#d8c2b8] tracking-widest uppercase">{unit.label}</span>
              </div>
            ))}
          </div>

          <span className="inline-flex items-center space-x-2 bg-[#290e11] text-[#c69d66] border border-[#c69d66]/40 px-5 py-2 rounded-full text-xs font-medium">
            <i className="fas fa-heart text-[#c69d66]"></i>
            <span>{weddingDate.full}</span>
          </span>
        </section>

        <GoldenSectionDivider />

        {/* ==================== EVENT ==================== */}
        <section id="event" className="py-20 px-4 max-w-5xl mx-auto relative overflow-hidden">
          <FrameLeaves />

          <div className="text-center mb-16" data-aos="fade-up">
            <p className="font-arabic text-2xl text-[#e8d5c4] mb-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
            <p className="text-xs text-[#d8c2b8] mb-6">Assalamu&apos;alaikum Warahmatullahi Wabarakatuh</p>
            <h2 className="font-script text-5xl text-[#c69d66] mb-1">Save The Date</h2>
            <p className="font-serif italic text-[#d8c2b8] text-sm">Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventCards.map((event, index) => (
              <div key={event.title} className={`${cardStyle} text-center flex flex-col items-center`} data-aos={index === 0 ? "fade-right" : "fade-left"}>
                <div className="w-12 h-12 rounded-xl bg-[#c69d66] text-[#1f090b] flex items-center justify-center text-xl mb-4 shadow">
                  <i className={event.icon}></i>
                </div>
                <span className="text-[10px] tracking-widest text-[#c69d66] font-bold uppercase mb-1">{event.subtitle.toUpperCase()}</span>
                <h3 className="font-script text-4xl text-[#f5ebe6] mb-6">{event.title}</h3>
                <div className="space-y-3 w-full text-xs text-[#d8c2b8]">
                  {[
                    { icon: "fas fa-calendar", value: event.date },
                    { icon: "fas fa-clock", value: event.time },
                    { icon: "fas fa-map-marker-alt", value: event.location },
                  ].map((row) => (
                    <div key={row.icon} className="bg-[#240a0d]/80 p-3 rounded-xl flex items-center justify-center space-x-2 border border-[#c69d66]/20">
                      <i className={`${row.icon} text-[#c69d66]`}></i>
                      <span>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <GoldenSectionDivider />

        {/* ==================== LOCATION ==================== */}
        <section id="location" className="py-20 px-4 max-w-4xl mx-auto text-center relative overflow-hidden">
          <FrameLeaves />

          <div data-aos="fade-up">
            <i className="fas fa-map-marked-alt text-[#c69d66] text-2xl mb-2"></i>
            <h2 className="font-script text-5xl text-[#c69d66] mb-1">Lokasi Acara</h2>
            <p className="font-serif italic text-[#d8c2b8] text-sm mb-8">{venue.name}</p>
          </div>

          <div className={`${cardStyle} max-w-2xl mx-auto`} data-aos="zoom-in">
            <div className="bg-[#240a0d] p-3.5 rounded-xl text-xs text-[#d8c2b8] font-medium mb-4 inline-block border border-[#c69d66]/30 leading-relaxed">
              <i className="fas fa-location-dot text-[#c69d66] mr-1"></i>
              {venue.name} {venue.address}
            </div>
            <div className="w-full h-64 bg-[#240a0d] rounded-2xl overflow-hidden mb-6 relative border border-[#c69d66]/30">
              <iframe
                title={`Lokasi Pernikahan - ${venue.name}`}
                className="w-full h-full border-0"
                src={mapsEmbedUrl}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
            <a
              href={mapsLinkUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-[#c69d66] hover:bg-[#b08853] text-[#1f090b] text-xs font-semibold px-6 py-3 rounded-full shadow transition inline-flex items-center space-x-2 hover:scale-105"
            >
              <i className="fas fa-directions"></i>
              <span>Buka di Google Maps</span>
            </a>
          </div>
        </section>

        <GoldenSectionDivider />

        {/* ==================== WISHES ==================== */}
        <section id="wishes" className="py-20 px-4 max-w-3xl mx-auto relative overflow-hidden">
          <FrameLeaves />

          <div className="text-center mb-12" data-aos="fade-up">
            <i className="fas fa-comment-dots text-[#c69d66] text-2xl mb-2"></i>
            <h2 className="font-script text-5xl text-[#c69d66] mb-1">Buku Tamu</h2>
            <p className="font-serif italic text-[#d8c2b8] text-sm">{wishes.length} Best Friends Wishes</p>
          </div>

          <div className={`${cardStyle} mb-8`} data-aos="fade-up">
            <form onSubmit={handleWishSubmit} className="space-y-4">
              {/* Honeypot: disembunyikan dari tamu, hanya bot yang mengisinya */}
              <input
                type="text"
                name="website"
                value={formWebsite}
                onChange={(e) => setFormWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div>
                <label className="block text-[10px] uppercase font-bold text-[#c69d66] mb-1 tracking-wider">NAMA</label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  maxLength={60}
                  placeholder="Masukkan nama Anda"
                  className="w-full bg-[#240a0d]/90 border border-[#c69d66]/30 rounded-xl px-4 py-2.5 text-xs text-[#f5ebe6] placeholder-[#d8c2b8]/50 focus:outline-none focus:border-[#c69d66] transition"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-[#c69d66] mb-1 tracking-wider">UCAPAN &amp; DOA</label>
                <textarea
                  rows="4"
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  required
                  maxLength={500}
                  placeholder="Tulis ucapan dan doa untuk kami..."
                  className="w-full bg-[#240a0d]/90 border border-[#c69d66]/30 rounded-xl px-4 py-2.5 text-xs text-[#f5ebe6] placeholder-[#d8c2b8]/50 focus:outline-none focus:border-[#c69d66] transition"
                ></textarea>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-[#c69d66] mb-2 tracking-wider">KONFIRMASI KEHADIRAN</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Hadir", "Tidak Hadir"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setAttendance(option)}
                      className={`border text-xs py-2.5 rounded-xl font-medium transition flex items-center justify-center space-x-1 ${
                        attendance === option ? "border-[#c69d66] bg-[#c69d66] text-[#1f090b] font-bold shadow-md" : "border-[#c69d66]/30 bg-[#240a0d] text-[#d8c2b8]"
                      }`}
                    >
                      <i className={`fas ${option === "Hadir" ? "fa-check-circle" : "fa-times-circle"}`}></i> <span>{option}</span>
                    </button>
                  ))}
                </div>
              </div>

              {formError && (
                <p className="text-[11px] text-[#e9b3b3] flex items-center space-x-2">
                  <i className="fas fa-circle-exclamation"></i>
                  <span>{formError}</span>
                </p>
              )}
              {sent && (
                <p className="text-[11px] text-[#c69d66] flex items-center space-x-2">
                  <i className="fas fa-circle-check"></i>
                  <span>Terima kasih, ucapan Anda sudah terkirim.</span>
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#c69d66] hover:bg-[#b08853] disabled:opacity-60 text-[#1f090b] text-xs font-semibold py-3 rounded-xl shadow transition flex items-center justify-center space-x-2 hover:scale-[1.01]"
              >
                <i className="fas fa-paper-plane"></i>
                <span>{sending ? "Mengirim..." : "Kirim Ucapan"}</span>
              </button>
            </form>
          </div>

          <div className="space-y-3">
            {wishes.slice(0, visibleWishesCount).map((item) => (
              <div key={item.id} className="bg-gradient-to-r from-[#3b171a] to-[#290e11] p-4 rounded-2xl border border-[#c69d66]/30 text-xs space-y-1.5 transition-all hover:border-[#c69d66]/60 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-[#c69d66]">{item.name}</span>
                    <span className="text-[10px] text-[#d8c2b8]/60">• {item.time}</span>
                  </div>
                  <span className={`text-[10px] ${item.attendance === "Hadir" ? "bg-[#c69d66]/20 text-[#c69d66] border border-[#c69d66]/40" : "bg-stone-800 text-slate-300"} px-2 py-0.5 rounded-full font-semibold`}>
                    {item.attendance}
                  </span>
                </div>
                <p className="text-[#d8c2b8] leading-relaxed">{item.message}</p>
              </div>
            ))}
          </div>

          {visibleWishesCount < wishes.length && (
            <div className="text-center mt-6">
              <button
                onClick={handleReadMoreWishes}
                className="bg-[#240a0d] hover:bg-[#c69d66] text-[#c69d66] hover:text-[#1f090b] border border-[#c69d66]/50 text-xs font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md inline-flex items-center space-x-2"
              >
                <span>Read More</span>
                <i className="fas fa-chevron-down text-[10px]"></i>
              </button>
            </div>
          )}
        </section>

        <GoldenSectionDivider />

        {/* ==================== GIFT ==================== */}
        <section id="gift" className="py-20 px-4 max-w-3xl mx-auto text-center relative overflow-hidden">
          <FrameLeaves />

          <div data-aos="fade-up">
            <i className="fas fa-gift text-[#c69d66] text-2xl mb-2"></i>
            <h2 className="font-script text-5xl text-[#c69d66] mb-1">Amplop Digital</h2>
            <p className="font-serif italic text-[#d8c2b8] text-xs max-w-md mx-auto mb-8">
              Doa restu Anda adalah karunia terindah bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui:
            </p>

            {!isGiftOpen ? (
              <button
                onClick={() => setIsGiftOpen(true)}
                className="bg-[#c69d66] hover:bg-[#b08853] text-[#1f090b] text-xs font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition flex items-center space-x-2 mx-auto hover:scale-105"
              >
                <i className="fas fa-wallet"></i>
                <span>Buka Amplop</span>
              </button>
            ) : (
              <div className="space-y-6 mt-6 max-w-md mx-auto transition-all duration-500">
                {giftAccounts.map((account) => (
                  <div key={account.id} className={`${cardStyle} text-center flex flex-col items-center space-y-2`}>
                    <div className="flex justify-between items-center w-full border-b border-[#c69d66]/30 pb-2 mb-1">
                      <span className="font-bold text-[#c69d66] text-sm tracking-wider">BANK {account.bank.toUpperCase()}</span>
                      <i className="fas fa-credit-card text-[#c69d66]"></i>
                    </div>
                    <p className="text-sm text-[#f5ebe6] font-mono font-bold tracking-widest">{account.accountNumber}</p>
                    <p className="text-xs text-[#d8c2b8] font-medium">a.n. {account.accountName}</p>
                    <button
                      onClick={() => copyToClipboard(account.accountNumber, `Nomor Rekening ${account.bank}`)}
                      className="mt-3 bg-[#c69d66]/20 hover:bg-[#c69d66] text-[#c69d66] hover:text-[#1f090b] text-[11px] font-semibold px-5 py-2 rounded-lg transition border border-[#c69d66]/40 inline-flex items-center space-x-1"
                    >
                      <i className="fas fa-copy"></i>
                      <span>Salin No. Rekening</span>
                    </button>
                  </div>
                ))}

                <div className={`${cardStyle} text-center flex flex-col items-center space-y-2`}>
                  <div className="flex justify-between items-center w-full border-b border-[#c69d66]/30 pb-2 mb-1">
                    <span className="font-bold text-[#c69d66] text-sm tracking-wider">ALAMAT BUAT KADO</span>
                    <i className="fas fa-box-open text-[#c69d66]"></i>
                  </div>
                  <p className="text-xs text-[#d8c2b8] leading-relaxed px-2">{giftAddress.address}</p>
                  <button
                    onClick={() => copyToClipboard(giftAddress.address, "Alamat Kado")}
                    className="mt-3 bg-[#c69d66]/20 hover:bg-[#c69d66] text-[#c69d66] hover:text-[#1f090b] text-[11px] font-semibold px-5 py-2 rounded-lg transition border border-[#c69d66]/40 inline-flex items-center space-x-1"
                  >
                    <i className="fas fa-copy"></i>
                    <span>Salin Alamat</span>
                  </button>
                </div>

                <button
                  onClick={() => setIsGiftOpen(false)}
                  className="mt-6 bg-[#c69d66] hover:bg-[#b08853] text-[#1f090b] text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition flex items-center space-x-2 mx-auto hover:scale-105"
                >
                  <i className="fas fa-paper-plane"></i>
                  <span>Kirim Amplop</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="bg-gradient-to-b from-[#240a0d] via-[#170507] to-[#0a0203] text-white py-20 px-4 text-center relative overflow-hidden border-t border-[#c69d66]/20">
          <img src={bungaLily} alt="" className="absolute -left-16 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 opacity-15 pointer-events-none select-none transform -rotate-45 drop-shadow-lg brightness-125" />
          <img src={bungaLily} alt="" className="absolute -right-16 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 opacity-15 pointer-events-none select-none transform rotate-[135deg] drop-shadow-lg brightness-125" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10" data-aos="fade-up">
            <div className="text-[#c69d66] text-lg">
              <i className="fas fa-heart"></i>
            </div>
            <h2 className="font-script text-5xl text-[#c69d66]">{couple.shortNames}</h2>
            <p className="font-serif tracking-widest text-xs text-[#d8c2b8]">{weddingDate.compact}</p>

            <blockquote className="italic text-xs text-[#d8c2b8] max-w-md mx-auto font-serif leading-relaxed">
              &ldquo;{footerHadith.text}&rdquo;
              <span className="block text-[10px] text-[#c69d66] mt-1 uppercase font-sans font-semibold">— {footerHadith.source}</span>
            </blockquote>

            <div className="w-24 h-px bg-[#c69d66]/30 mx-auto"></div>

            <div className="space-y-1 text-xs text-[#d8c2b8]">
              <p>Atas Kehadiran dan Doa Restunya, Kami Ucapkan</p>
              <p className="font-script text-3xl text-[#c69d66] py-2">Jazakumullah Khairan Katsira</p>
              <p className="text-[11px] font-semibold text-[#f5ebe6]">
                Kel. {couple.bride.parents.father} &amp; {couple.bride.parents.mother}
              </p>
              <p className="text-[11px] font-semibold text-[#f5ebe6]">
                Kel. {couple.groom.parents.father} &amp; {couple.groom.parents.mother}
              </p>
            </div>

            <div className="pt-8 text-[10px] text-[#d8c2b8]/60">© {weddingDate.year} {couple.shortNames} Wedding Invitation</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
