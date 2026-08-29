-- Seed 25 ucapan dari repo Delfianz/wedding-invitation ke tabel guestbook.
--
-- Jalankan SEKALI saja di Supabase SQL Editor (Dashboard > SQL Editor > New query).
-- Skrip ini BELUM dijalankan dari sisi kode: repo tidak punya kredensial Supabase.
--
-- Catatan:
-- * `attendance` dipetakan dari label UI ("Hadir") ke enum tabel ('hadir').
-- * `created_at` diisi mundur dari waktu eksekusi supaya urutan dan label
--   "N Jam/Hari Yang Lalu" di halaman ikut masuk akal.
-- * Teks memakai dollar-quoting ($$...$$) agar apostrof di dalam ucapan aman.

insert into public.guestbook (name, message, attendance, created_at) values
  ($$Bu Evy$$, $$Barakallah..semoga menjadi keluarga yg sakinah mawadah dan warrahmah..aamiin$$, 'hadir', now() - interval '5 hours'),
  ($$Salfa$$, $$Selamat memasuki chapter baru Teh maudy! Semoga kehidupan pernikahan kalian selalu diisi obrolan seru tanpa akhir, sabar yang melimpah, dan makin sayang satu sama lain. Happy wedding!💖$$, 'hadir', now() - interval '6 hours'),
  ($$Hidayat$$, $$Selamat menempuh hidup baru…semoga menjadi keluarga sakinah…mawadah…warohmah…Aamiin Yra$$, 'hadir', now() - interval '16 hours'),
  ($$Ruta$$, $$Bismillah Alhamdulillah Semoga Maudy dan Rama menjadi keluarga sakinah mawadah warrohmah dan barokah Aamiin Yaa Robbal’aalamiin$$, 'hadir', now() - interval '1 days'),
  ($$Profita Farahida$$, $$Selamat ya dik semoga mencapai pernikahan yang sakinah mawadah waa rahmah aamiin… Turut berbahagia$$, 'hadir', now() - interval '1 days'),
  ($$Ane$$, $$Selamat ya ade…semoga di lancar kan persiapannnya sampai dengan hari H… Dan semoga menjadi keluarga yang sakinah mawadah warahmah…Aamiin yaa robbal allamin….$$, 'hadir', now() - interval '1 days'),
  ($$Sutimah$$, $$Akhirnya ade selamat ya sakinah mawadah warohmah aamiin$$, 'hadir', now() - interval '1 days'),
  ($$cicin$$, $$happy wedding mody dan rama!❤️ semoga lancar sampai hari H, menjadi keluarga yang samawa, bahagia selaluuuuuuu yaa kalian berduaaa!!!! rama tolong jaga, sayangi mody sebaik mungkin dan selama mungkin sampai…$$, 'hadir', now() - interval '2 days'),
  ($$Sagino$$, $$Selamat menempuh hidup baru semoga bahagia dan langgeng dalam menjalani kehidupan rumah tangga Aamiin$$, 'hadir', now() - interval '3 days'),
  ($$Enin Nunuy Nurliah$$, $$Do’yg terbaik buat calon pengantin RAMA & MAUDY$$, 'hadir', now() - interval '3 days'),
  ($$Enin Nunuy Nurliah$$, $$Assalamualaikum Bismillaah Selamat menempuh hidup baru semoga SAMAWA dan dapet momongan yg soleh & solehah$$, 'hadir', now() - interval '3 days'),
  ($$Fajrin & Sonny$$, $$Selamat rama dan istri Semoga rumah tangga kalian menjadi tempat pulang yang paling nyaman, dipenuhi keberkahan, rezeki yang baik, serta kebahagiaan yang terus bertumbuh.$$, 'hadir', now() - interval '4 days'),
  ($$Yolanda$$, $$Selamat menempuh hidup baru, semoga Allah menyempurnakan kebahagiaan kalian dan menjadikan pernikahan kalian sebagai ibadah kepada Nya.$$, 'hadir', now() - interval '4 days'),
  ($$Eko Kurniawan$$, $$Selamat menempuh hidup baru. Semoga sakinah, mawadah, warahmah. Aamiin$$, 'hadir', now() - interval '5 days'),
  ($$Fadil$$, $$Alhamdulillah kur, samawa until jannah$$, 'hadir', now() - interval '6 days'),
  ($$Model sawah belakang$$, $$Akhirnya ga sama pegawai sendiri Ker, salam rispek salam aspal tasik$$, 'hadir', now() - interval '7 days'),
  ($$Akas$$, $$Ulah kasarean bek$$, 'hadir', now() - interval '7 days'),
  ($$Onong$$, $$Ulah make calana bolong kur$$, 'hadir', now() - interval '7 days'),
  ($$Variz Hendra$$, $$Mantaabs Rama, sing lancar sampai hari H di berkahi pernikahan na aamiin$$, 'hadir', now() - interval '8 days'),
  ($$Hilmi$$, $$Selamat bos konveksi, sing lancar sampai hari H, hidup pasundan 4!$$, 'hadir', now() - interval '8 days'),
  ($$Nenek Nunung Hanafi$$, $$Selamat menempuh hidup baru in syaa Allah jd kelrg yg SaMaWa rukun langgeng smp akhir hayat Aamiin2 YRA ..🤲❤️🌹$$, 'hadir', now() - interval '21 days'),
  ($$Agus Witono$$, $$Selamat menempuh hidup baru, smoga Alloh selalu merahmatinya dan menjadikannya rumah tangga yg sakinah mawaddah warohma serta sll diberi kemulyaan & kebahagian dunia akhirat u ananda berdua, aamiin yra$$, 'hadir', now() - interval '22 days'),
  ($$Rodiyah Aa Asep Cahy$$, $$Happy wedding SAMAWA$$, 'hadir', now() - interval '22 days'),
  ($$arum$$, $$selamat untuk AA dan pasangan, serta bu Titin dan keluarga.. semoga diberikan kelancaran sampai hari bahagianya,… aamiin yra$$, 'hadir', now() - interval '22 days'),
  ($$Emir Zarry$$, $$Selamar berbahagia$$, 'hadir', now() - interval '22 days');
