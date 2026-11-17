# Arah desain portofolio ARYA

## Referensi dan keputusan

Alur referensi Eka Wahyu: perkenalan → profil → perjalanan → karya → kontak. Untuk ARYA, perjalanan kepemimpinan ETH-0 dan pembelajaran keamanan siber diberi tempat tersendiri. Komentar publik dihilangkan sesuai PRD. Visual memakai editorial layout dengan garis halus, tipografi besar, dan diagram sistem buatan sendiri; tidak menyalin aset referensi.

## Wireframe

Desktop: navigasi tetap → hero dua kolom (perkenalan / panel visual) → about dan pendidikan → pengalaman → skills → proyek tiga kolom → cyber lab → sertifikasi → ETH-0 → kontak → footer. Detail proyek: breadcrumb → judul dan status → ringkasan → fokus, peran, stack, hasil yang terkonfirmasi.

Mobile: navigasi ringkas dengan menu → hero satu kolom → seluruh bagian menjadi satu kolom. Kartu proyek dan sertifikasi memenuhi lebar layar; tautan kontak tetap berukuran mudah disentuh.

## Design system

- Warna: latar `#f8fafc`, permukaan `#ffffff`, teks `#0f172a`, biru `#2563eb`, teks sekunder `#52647c`, garis `#dbe4ef`.
- Tipografi: Manrope untuk judul dan DM Sans untuk isi, dengan fallback sistem. Judul hero clamp 3–5.8rem, judul bagian clamp 2–3.4rem, teks isi 1rem/1.65.
- Konten maksimum 1160px; gutter 24px desktop dan 20px mobile.
- Spasi bagian 96–120px desktop dan 72px mobile.
- Komponen: tombol, label bagian, kartu proyek, kartu sertifikat, timeline, tag kemampuan.
- Fokus keyboard terlihat jelas; motion singkat dan dimatikan saat `prefers-reduced-motion`.

## Audit Anti AI Slop sebelum implementasi

Tidak ada statistik, tanggal, link verifikasi, screenshot, atau capaian yang dibuat-buat. Diagram proyek adalah visual konseptual yang diberi label jelas. Variasi ritme section dipakai agar halaman tidak menjadi deretan kartu identik. CTA hanya menuju tautan yang sudah dikonfirmasi dalam PRD.
