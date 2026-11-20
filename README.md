# Portofolio Arya Kharisudin Irfani

Website portofolio pribadi Arya, mahasiswa Teknik Informatika UIN Maulana Malik Ibrahim Malang yang berfokus pada Blue Team, Linux, dan Python. Situs ini memperkenalkan latar belakang Arya, pengalaman organisasi, keahlian, proyek, dan sertifikat dalam satu halaman agar pengunjung mudah mengenal karya serta menghubunginya.

Pengunjung memulai dari perkenalan singkat, lalu dapat menelusuri riwayat pendidikan dan pengalaman, melihat proyek serta sertifikat, dan membuka profil LinkedIn atau GitHub melalui bagian kontak. Navigasi di bagian atas menyediakan jalan pintas ke setiap bagian. Konten proyek dan kredensial masih dikurasi; [PRD dan catatan keputusan](./docs/PRD.md) mencatat sumber data serta pekerjaan berikutnya.

## Teknologi

Situs dibuat dengan **Next.js 16**, **React 19**, **TypeScript**, dan **Tailwind CSS 4**. Data profil disimpan di `src/data/resume.tsx`, sehingga perubahan konten tidak memerlukan database. Animasi potret mengikuti posisi scroll pada desktop dan menyesuaikan pengaturan *reduced motion* pengguna.

## Yang sudah ada

- Halaman utama berisi perkenalan, About, pendidikan dan pengalaman dalam timeline dua kolom, keahlian, proyek, sertifikat, dan kontak LinkedIn.
- Navbar responsif berbentuk dock transparan dengan pill aktif, menu ponsel, serta efek hilang saat scroll turun dan muncul saat scroll naik.
- Foto Arya tampil dalam bingkai yang bergerak mengikuti scroll dan sedikit merespons pointer pada desktop; gerak dikurangi sesuai pengaturan sistem.
- Empat proyek awal dari PRD ditampilkan tanpa tautan demo atau gambar yang belum tersedia.
- Blog contoh dari template dialihkan ke beranda sampai ada tulisan Arya sendiri.

## Jalankan secara lokal

Butuh **Node.js 20.9 atau lebih baru** dan npm. Buka terminal di folder `C:\File Arya\porto gwww\portfolio`, lalu jalankan:

```bash
npm install --no-package-lock
npm run dev
```

Buka alamat **Local** yang muncul di terminal, biasanya [http://localhost:3000](http://localhost:3000). Untuk memeriksa build produksi:

```bash
npm run build
```

## Tempat mengubah konten

| Keperluan | Berkas |
| --- | --- |
| Nama, bio, pendidikan, pengalaman, keahlian, proyek, kontak | [`src/data/resume.tsx`](./src/data/resume.tsx) |
| Timeline pendidikan dan pengalaman | [`src/components/section/journey-section.tsx`](./src/components/section/journey-section.tsx) |
| Kartu sertifikat | [`src/components/section/certificates-section.tsx`](./src/components/section/certificates-section.tsx) |
| Gerak foto profil | [`src/components/scroll-portrait.tsx`](./src/components/scroll-portrait.tsx) |
| Susunan halaman utama | [`src/app/page.tsx`](./src/app/page.tsx) |
| Navbar | [`src/components/navbar.tsx`](./src/components/navbar.tsx) |
| Warna dan gaya dasar | [`src/app/globals.css`](./src/app/globals.css) |
| PRD, sumber data, keputusan, dan pekerjaan berikutnya | [`docs/PRD.md`](./docs/PRD.md) |
| Daftar referensi desain dan screenshot lokal | [`Reverensi/README.md`](./Reverensi/README.md) |

## Referensi desain

Sumber dan kegunaan setiap rujukan dicatat di [folder Reverensi](./Reverensi/README.md). Saat ini, [Eka Wahyu](https://ekawahyu-portofolio.vercel.app/) menjadi acuan warna dan timeline pengalaman; [Nim](https://github.com/ibelick/nim) menjadi acuan tipografi dan ruang; [dleer-portfolio](https://github.com/dleerdefi/dleer-portfolio) menjadi acuan detail Linux untuk tahap berikutnya. Fondasi kode berasal dari [Magic UI Portfolio](https://github.com/magicuidesign/portfolio). Rujukan ini adalah inspirasi desain, bukan sumber klaim tentang Arya.

Sebelum rilis, isi `NEXT_PUBLIC_SITE_URL` dengan domain publik yang benar di `.env.local` atau pengaturan hosting. Tanpa itu, metadata memakai `http://localhost:3000` untuk preview lokal.

## Data yang masih diperlukan

Email publik, CV publik, serta bukti visual/tautan untuk empat proyek lama masih menunggu verifikasi. Peran Lead Ethernet-0 ditambahkan berdasarkan rincian yang diberikan Arya; GitHub publiknya sudah tertaut di Contact. Tiga judul sertifikat ditampilkan berdasarkan profil LinkedIn publik, tetapi tautan kredensial masing-masing dan gambar sertifikat belum tersedia. Jangan menambahkan klaim atau tautan contoh sebagai data Arya. Layar HP yang lebih kecil serta navigasi keyboard masih perlu diperiksa sebelum rilis.

## Asal kode dan lisensi

Fondasi proyek berasal dari [Magic UI Portfolio](https://github.com/magicuidesign/portfolio) karya Dillion Verma dan dimodifikasi untuk Arya. Hak cipta dan syarat MIT milik template tetap tercantum dalam [LICENSE](./LICENSE).
