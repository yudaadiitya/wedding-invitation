// Sumber tunggal data undangan. Komponen membaca dari sini, jangan hardcode ulang.

export const couple = {
  shortNames: 'Maudya & Rama',
  hashtag: 'The Wedding Of',
  bride: {
    nickname: 'Maudy',
    coverName: 'Maudya',
    fullName: 'Maudya Safitri',
    initials: 'M',
    childOrder: 'Putri Ke 2 dari 2 Bersaudara',
    parents: { father: 'Bapak Zulfikar Ady', mother: 'Ibu Juriati' },
    instagram: null,
  },
  groom: {
    nickname: 'Rama',
    coverName: 'Rama',
    fullName: 'Muhammad Rahadian Ramadhan',
    initials: 'R',
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

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  venue.mapsQuery
)}&output=embed`

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
