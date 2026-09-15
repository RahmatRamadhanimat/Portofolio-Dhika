# Portofolio Dhika Frisco Dwi Pratama

Website statis HTML, CSS, dan JavaScript. Tidak membutuhkan npm, build, database, atau framework. Buka `index.html` untuk mencoba secara lokal. Semua aset utama tersedia offline.

## Upload dan deploy

1. Ekstrak ZIP ini.
2. Buat repository GitHub, kemudian upload **semua isi folder** (index.html harus berada pada root repository). Jangan hanya mengunggah ZIP.
3. Pada pengaturan GitHub Pages, gunakan penerbitan dari branch utama, folder root, lalu simpan. Tunggu penerbitan selesai dan gunakan URL yang ditampilkan GitHub.
4. Untuk hosting statis lain, gunakan folder yang berisi index.html sebagai direktori publik; tidak ada perintah build.

Panduan ini bukan konfirmasi bahwa website sudah dipublikasikan. Paket ini siap diunggah dan di-host.

## Mengaktifkan kontak email / WhatsApp

Edit `config.js` dan isi email milik Dhika dan/atau nomor WhatsApp milik Dhika dalam format internasional (62..., hanya angka). Biarkan kosong bila tidak dipakai. Email dan nomor belum diberikan, sehingga tidak diisi sembarang alamat.

Setelah konfigurasi valid, pilihan Email / WhatsApp muncul otomatis. WhatsApp membuka draf ke nomor tujuan. Email memakai aplikasi email pengunjung (mailto). Pengunjung tetap harus menekan kirim di aplikasi tersebut; website tidak mengirim otomatis dan tidak menyimpan pesan. Tanpa konfigurasi, pengunjung dapat menyalin pesan untuk dikirim melalui Instagram. Jika clipboard tidak tersedia, teks ditampilkan agar dapat disalin manual.

## Isi paket

- `index.html`: halaman utama, lima bagian, navigasi, dan galeri.
- `style.css`: tema gelap/terang, responsive, glassmorphism dan animasi.
- `script.js`: menu, tema tersimpan, filter, detail proyek, animasi skill, kontak.
- `config.js`: konfigurasi tujuan kontak.
- `assets/CV-Dhika-Frisco.pdf`: CV satu halaman berdasarkan data yang diberikan.
- `assets/favicon.svg`: ikon monogram.
- `projects/task-board.html` dan `tasks.js`: demo daftar tugas.
- `projects/nilai_siswa.py`: contoh Python.
- `projects/Kalkulator.java`: contoh Java.
- `.nojekyll`: penanda untuk hosting GitHub Pages.

## Menjalankan contoh kode

Python 3:

```sh
python3 projects/nilai_siswa.py
```

Java (JDK 8+):

```sh
javac projects/Kalkulator.java
java -cp projects Kalkulator
```

Demo daftar tugas dapat dibuka langsung di browser. Penyimpanan lokal bergantung pada izin browser; gunakan hosting untuk perilaku konsisten.

## Mengganti konten

Empat kartu berlabel **Contoh latihan**, bukan klaim riwayat karya Dhika. Ganti isi kartu di index.html serta data `projects` di script.js jika sudah memiliki proyek asli. Tidak ada tahun pendidikan, prestasi, foto wajah, pengalaman kerja, email, atau nomor telepon yang direka. Monogram DF digunakan sebagai identitas visual. CV memuat data yang diberikan dan ringkasan profil pelajar; ganti PDF di path yang sama bila diperbarui.

## Fitur

HTML semantik, ukuran responsif HP/tablet/laptop, hamburger menu, smooth scroll, pilihan dark/light dengan penyimpanan preferensi, animasi skill berbasis scroll, filter kategori, dialog detail dengan Escape, download PDF, tautan WordPress/Blogger/Instagram, navigasi keyboard, fokus terlihat, dan dukungan reduced motion.

Persentase skill adalah penilaian pribadi: HTML & CSS 85%, JavaScript 70%, Python 60%, Java 50%.

## Pemeriksaan paket

Sintaks JavaScript dan semua rujukan aset lokal diperiksa. Contoh Python dijalankan dengan input nilai sederhana. CV PDF dirender dan diperiksa secara visual. Pengujian browser otomatis belum berhasil dilakukan karena browser tidak tersedia dan pengunduhannya gagal; tampilan serta interaksi perlu diperiksa kembali setelah di-host. Contoh Java belum dikompilasi karena JDK tidak tersedia di lingkungan pembuatan.

## Halaman prestasi (tambahan)

Tombol **Lihat Prestasi Saya Di sini ya** terletak tepat setelah kartu proyek dan membuka `prestasi.html`. Halaman menggunakan `style.css` yang sama, termasuk dark/light mode dan preferensi tema tersimpan. Klik gambar untuk memperbesar; tekan Escape atau tombol tutup untuk kembali.

### Menambahkan gambar

1. Masukkan gambar ke folder **asset** (tanpa s).
2. Beri nama `prestasi1.png`, `prestasi2.jpg`, `prestasi3.jpeg`, dan seterusnya. PNG/JPG/JPEG boleh dicampur. Gunakan huruf kecil dan nomor tanpa nol di depan.
3. Upload folder beserta gambar ke GitHub, kemudian tunggu deploy selesai dan muat ulang halaman prestasi.

Tidak perlu mengedit HTML. Secara default, halaman memeriksa nomor **1–100**. Nomor yang tidak tersedia dilewati; gambar diurutkan berdasarkan nomor. Untuk nomor di atas 100, ubah `window.PORTFOLIO_CONFIG.prestasiMax` di `config.js`. Hindari angka terlalu besar agar tidak terlalu banyak permintaan gambar. Untuk satu nomor dengan beberapa format, PNG didahulukan, lalu JPG, lalu JPEG. File rusak/tidak ditemukan tidak ditampilkan. Pada koneksi lambat, muat ulang bila gambar gagal dimuat.

Folder **assets** yang sudah ada tetap berisi CV dan favicon. Folder baru **asset** khusus gambar prestasi. Belum ada gambar prestasi asli yang diberikan, sehingga paket menampilkan keadaan kosong yang rapi sampai gambar ditambahkan. Jangan mengubah ekstensi file saja; pastikan berkas benar-benar gambar PNG/JPG/JPEG.

Pembaruan prestasi: pemeriksaan sintaks, rujukan file, posisi tombol, serta simulasi logika galeri lulus (format campuran, nomor terlewat, urutan, prioritas PNG, pembesaran/tutup, dan kondisi kosong). Pemeriksaan ini bukan pengujian visual di browser.
