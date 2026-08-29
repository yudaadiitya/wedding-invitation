// Sumber tunggal data undangan. Komponen membaca dari sini, jangan hardcode ulang.

export const couple = {
  shortNames: 'Maudya & Rama',
  hashtag: 'The Wedding Of',
  bride: {
    nickname: 'Maudy',
    coverName: 'Maudya',
    fullName: 'Maudya Safitri',
    initials: 'MS',
    childOrder: 'Putri Ke 2 dari 2 Bersaudara',
    parents: { father: 'Bapak Zulfikar Ady', mother: 'Ibu Juriati' },
    instagram: null,
  },
  groom: {
    nickname: 'Rama',
    coverName: 'Rama',
    fullName: 'Muhammad Rahadian Ramadhan',
    initials: 'MR',
    childOrder: 'Putra Ke 1 dari 3 Bersaudara',
    parents: { father: 'Bapak Ruswandi', mother: 'Ibu Titin' },
    instagram: null,
  },
}

export const weddingDate = {
  iso: '2026-09-05T08:00:00+07:00',
  dayName: 'Sabtu',
  day: '05',
  monthName: 'September',
  year: '2026',
  full: 'Sabtu, 5 September 2026',
  compact: '05 · SEPTEMBER · 2026',
  footer: '05 · September · 2026',
}

export const venue = {
  name: 'Mepro Hall',
  address:
    'Jalan Soekarno No. 789 Babakan Penghulu, Kec. Cinambo, Kota Bandung',
  mapsQuery: 'Mepro Hall, Jalan Soekarno No. 789, Babakan Penghulu, Cinambo, Kota Bandung',
}

// Embed ini menyematkan place-id Mepro Hall yang sebenarnya, lebih akurat
// daripada pencarian berbasis query.
export const mapsEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7188737525384!2d107.6908569!3d-6.9360814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68cce39bf3ca8d%3A0xb3a69a48972ca819!2sMepro%20Hall!5e0!3m2!1sid!2sid!4v1690000000000!5m2!1sid!2sid'

export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  venue.mapsQuery
)}`

export const events = [
  {
    title: 'Akad',
    subtitle: 'The Sacred Vow',
    date: weddingDate.full,
    time: '08.00 - 09.30 WIB',
    location: venue.name,
  },
  {
    title: 'Resepsi',
    subtitle: 'The Celebration',
    date: weddingDate.full,
    time: '11.00 - 14.00 WIB',
    location: venue.name,
  },
]

export const quran = {
  arabic:
    'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
  translation:
    'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.',
  source: 'QS. Ar-Rum: 21',
}

export const prayers = [
  {
    arabic:
      'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    translation:
      'Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.',
    source: 'QS. Al-Furqan: 74',
  },
  {
    arabic: 'بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
    translation:
      'Semoga Allah memberkahimu dan melimpahkan berkah atasmu, serta mengumpulkan kalian berdua dalam kebaikan.',
    source: 'HR. Abu Daud',
  },
]

export const footerHadith = {
  text:
    'Sesungguhnya Allah sangat mencintai hamba-Nya yang menikah dan membenci hamba-Nya yang membujang.',
  source: 'HR. Bukhari',
}

// CATATAN: nomor rekening di bawah disalin apa adanya dari undangan referensi.
// Ganti dengan rekening yang benar sebelum undangan ini dipakai sungguhan.
export const giftAccounts = [
  {
    id: 'mandiri',
    bank: 'Mandiri',
    accountNumber: '1300022526043',
    accountName: 'Maudya Safitri',
    gradient: 'from-dusty-blue-600 via-dusty-blue-700 to-dusty-blue-900',
  },
  {
    id: 'bca',
    bank: 'BCA',
    accountNumber: '2330200521',
    accountName: 'Muhammad Rahadian R',
    gradient: 'from-gold-400 via-gold-500 to-gold-700',
  },
]

export const giftAddress = {
  label: 'Alamat Pengiriman Hadiah',
  address:
    'Jl. Jatiluhur IV Blok D.295 RT 04 RW 11, Desa Jatiendah, Kec. Cilengkrang 40616',
  // Kontak penerima sengaja dikosongkan — isi sendiri, jangan pakai data pihak
  // ketiga dari undangan referensi.
  contactName: 'Nama Penerima',
  contactPhone: '08xx-xxxx-xxxx',
  contactAddress: 'Alamat penerima kado',
}

export const closingNote =
  'Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do\'a restu kepada kedua mempelai.'

// Ganti lagu cukup dengan menaruh file baru di public/assets/audio/
// lalu ubah `src` di bawah. Pastikan Anda punya hak pakai atas lagunya.
export const music = {
  src: '/assets/audio/background-music.mp3',
  title: 'Flowers In The Window (Remastered 2021)',
  artist: 'Travis',
}
