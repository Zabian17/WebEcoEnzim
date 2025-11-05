# 📖 PANDUAN LENGKAP EDIT WEBSITE ECO ENZIM

Panduan ini dibuat untuk **pemula** yang baru belajar HTML/CSS/JavaScript.

---

## 📁 STRUKTUR FILE

```
TugasWeb/
├── index.html              ← Halaman Beranda
├── about.html              ← Halaman Apa itu Eco Enzim
├── process.html            ← Halaman Cara Membuat
├── benefits.html           ← Halaman Manfaat
├── references.html         ← Halaman Referensi
├── team.html               ← Halaman Tim Kami (EDIT UNTUK FOTO & ID)
├── contact.html            ← Halaman Kontak
├── styles.css              ← File CSS (tampilan website)
├── styles-commented.css    ← CSS dengan penjelasan lengkap (BACA INI!)
├── script.js               ← File JavaScript (interaktivitas)
├── script-commented.js     ← JavaScript dengan penjelasan lengkap (BACA INI!)
└── assets/
    └── images/
        ├── team/           ← SIMPAN FOTO TIM DI SINI
        │   ├── alzabilly.jpg
        │   ├── rafly.jpg
        │   ├── fathimah.jpg
        │   ├── audry.jpg
        │   ├── nabila.jpg
        │   └── najwa.jpg
        └── logo.png        ← Logo website (opsional)
```

---

## 🎯 TUGAS UTAMA: MENAMBAH FOTO & ID TIM

### 1️⃣ **Menyiapkan Foto Anggota**

#### Langkah A: Siapkan Foto
- Format: JPG atau PNG
- Ukuran: 500x500 pixel (persegi)
- Ukuran file: Maksimal 500KB
- Nama file: Huruf kecil, sesuai nama

**Contoh nama file yang benar:**
```
✅ alzabilly.jpg
✅ rafly.png
✅ fathimah.jpg
```

**Contoh nama file yang salah:**
```
❌ Alzabilly Calvin.jpg    (ada spasi)
❌ RAFLY.JPG               (huruf besar semua)
❌ foto-fathimah.jpg       (beda dengan yang di code)
```

#### Langkah B: Resize Foto
Gunakan tools online GRATIS:
- **iloveimg.com/resize-image** (Recommended)
- **pixlr.com/e** (Editor online)
- **photopea.com** (Seperti Photoshop)

Cara resize di iloveimg:
1. Buka iloveimg.com/resize-image
2. Upload foto
3. Pilih "By pixels"
4. Isi: Width 500, Height 500
5. Download hasil

#### Langkah C: Copy Foto ke Folder
1. Buka folder `TugasWeb/assets/images/team/`
2. Copy semua foto ke folder ini
3. Pastikan nama file PERSIS seperti di code:
   - alzabilly.jpg
   - rafly.jpg
   - fathimah.jpg
   - audry.jpg
   - nabila.jpg
   - najwa.jpg

---

### 2️⃣ **Mengisi Nomor ID Anggota**

#### Buka file: `team.html`

Cari baris ini (ada 6 kali, untuk setiap anggota):
```html
<!-- Nomor ID Anggota - Isi dengan nomor ID -->
<div class="member-id">ID: __________</div>
```

#### Ganti `__________` dengan nomor ID anggota

**SEBELUM:**
```html
<h3>Alzabilly Calvin</h3>
<div class="member-id">ID: __________</div>
<div class="role">Project Leader & Developer</div>
```

**SESUDAH:**
```html
<h3>Alzabilly Calvin</h3>
<div class="member-id">ID: 202401001</div>
<div class="role">Project Leader & Developer</div>
```

#### Ulangi untuk 6 anggota:
1. Alzabilly Calvin - ID: __________
2. Rafly Rahadian Nugraha - ID: __________
3. Fathimah Al Kholishoh - ID: __________
4. Audry Calisa - ID: __________
5. Nabila Aulia - ID: __________
6. Najwa Qothrunnada - ID: __________

---

## 🎨 EDIT TAMPILAN WEBSITE

### 1️⃣ **Ubah Warna Tema**

Buka file: `styles.css`

Cari bagian ini (baris 13-26):
```css
:root {
  --primary-green: #1B5E20;      ← Warna hijau utama
  --secondary-green: #4CAF50;    ← Warna hijau aksen
  --tertiary-green: #8BC34A;     ← Warna hijau muda
  --light-green-bg: #F1F8E9;     ← Background hijau muda
  --text-dark: #333333;          ← Warna teks gelap
  --text-light: #666666;         ← Warna teks terang
  --white: #FFFFFF;              ← Warna putih
}
```

**Contoh: Ubah jadi tema biru**
```css
:root {
  --primary-green: #0D47A1;      ← Biru tua
  --secondary-green: #2196F3;    ← Biru terang
  --tertiary-green: #64B5F6;     ← Biru muda
  --light-green-bg: #E3F2FD;     ← Background biru muda
  --text-dark: #333333;
  --text-light: #666666;
  --white: #FFFFFF;
}
```

💡 **Tool pilih warna:** coolors.co atau colorhunt.co

---

### 2️⃣ **Ubah Font (Huruf)**

Buka file: `styles.css`

Cari bagian ini (baris 47):
```css
body {
  font-family: 'Poppins', -apple-system, sans-serif;
}
```

**Pilihan font dari Google Fonts:**
- Poppins (saat ini)
- Roboto (modern, clean)
- Open Sans (friendly)
- Montserrat (bold, tegas)
- Lato (elegant)

**Cara ganti font:**

1. Buka: fonts.google.com
2. Pilih font (contoh: Roboto)
3. Klik "Select styles" → 400, 500, 600, 700
4. Copy link yang diberikan

5. Buka SEMUA file HTML (index.html, about.html, dll)
6. Cari baris ini:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

7. Ganti dengan link font baru:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">
```

8. Buka `styles.css`, ubah:
```css
font-family: 'Roboto', -apple-system, sans-serif;
```

---

### 3️⃣ **Ubah Logo Website**

#### Cara 1: Ganti Emoji (Paling Mudah)

Buka SEMUA file HTML, cari baris ini:
```html
<a href="index.html" class="logo">🌿 Edukasi Eco Enzim</a>
```

Ganti emoji 🌿 dengan emoji lain:
```html
<a href="index.html" class="logo">♻️ Edukasi Eco Enzim</a>
<a href="index.html" class="logo">🌱 Edukasi Eco Enzim</a>
<a href="index.html" class="logo">🍃 Edukasi Eco Enzim</a>
```

#### Cara 2: Pakai Gambar Logo

1. Siapkan logo (PNG, 200x200px, background transparan)
2. Simpan di: `assets/images/logo.png`
3. Buka SEMUA file HTML
4. Ganti baris logo jadi:
```html
<a href="index.html" class="logo">
  <img src="assets/images/logo.png" alt="Logo" style="height: 40px;">
  Edukasi Eco Enzim
</a>
```

---

## ✏️ EDIT ISI KONTEN

### 1️⃣ **Ubah Judul Hero**

Buka file yang mau diubah (contoh: `index.html`)

Cari bagian ini:
```html
<section class="hero">
  <h1>Selamat Datang di Website Edukasi Eco Enzim</h1>
  <p class="subtitle">Belajar membuat cairan ajaib...</p>
</section>
```

Ubah teksnya:
```html
<section class="hero">
  <h1>Judul Baru Anda Di Sini</h1>
  <p class="subtitle">Subtitle baru Anda di sini</p>
</section>
```

---

### 2️⃣ **Ubah Teks Footer**

Buka SEMUA file HTML, cari bagian ini:
```html
<div class="footer-bottom">
  <p>&copy; 2024 Website Edukasi Eco Enzim. Dibuat untuk edukasi lingkungan.</p>
</div>
```

Ubah:
```html
<div class="footer-bottom">
  <p>&copy; 2024 Nama Tim Anda. Tugas Mata Kuliah Web Programming.</p>
</div>
```

---

### 3️⃣ **Tambah/Edit Deskripsi Tim**

Buka `team.html`, cari bagian info anggota:

```html
<p>Bertanggung jawab atas koordinasi tim...</p>
```

Ganti dengan deskripsi sendiri:
```html
<p>Mahasiswa Informatika yang suka coding dan lingkungan hijau.</p>
```

---

## 🛠️ TROUBLESHOOTING (Perbaikan Masalah)

### ❌ Masalah 1: Foto Tidak Muncul

**Penyebab:**
- Nama file tidak sama
- Foto tidak ada di folder
- Format salah

**Solusi:**
1. Cek nama file PERSIS sama (huruf kecil semua)
2. Cek foto ada di folder `assets/images/team/`
3. Refresh browser: Ctrl + F5 (Windows) atau Cmd + Shift + R (Mac)

---

### ❌ Masalah 2: Warna Tidak Berubah

**Penyebab:**
- Salah file (edit yang commented)
- Browser cache

**Solusi:**
1. Pastikan edit `styles.css` (BUKAN styles-commented.css)
2. Save file (Ctrl + S)
3. Hard refresh browser: Ctrl + F5

---

### ❌ Masalah 3: Menu Mobile Tidak Berfungsi

**Penyebab:**
- JavaScript error
- File script.js tidak load

**Solusi:**
1. Buka Developer Tools (F12)
2. Tab "Console" - Lihat error
3. Pastikan ada file `script.js` di folder yang sama
4. Cek baris ini ada di HTML:
```html
<script src="script.js"></script>
```

---

### ❌ Masalah 4: Layout Berantakan di Mobile

**Penyebab:**
- CSS responsive rusak
- Viewport tidak diset

**Solusi:**
1. Pastikan ada baris ini di SEMUA file HTML:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

2. Test di Developer Tools:
   - F12 → Toggle device toolbar (Ctrl + Shift + M)
   - Pilih device (iPhone, iPad, dll)

---

## 🧪 TESTING WEBSITE

### Checklist Sebelum Submit:

- [ ] Semua 7 halaman bisa dibuka
- [ ] Navigasi menu berfungsi (semua link jalan)
- [ ] Foto tim muncul (atau emoji jika belum ada foto)
- [ ] ID anggota sudah diisi
- [ ] Menu mobile (hamburger) berfungsi di layar kecil
- [ ] Tidak ada typo di teks
- [ ] Footer copyright sudah diganti
- [ ] Website responsive (test di mobile view)

### Cara Test:

1. **Desktop:** Buka di Chrome/Firefox ukuran normal
2. **Tablet:** F12 → Responsive mode → iPad
3. **Mobile:** F12 → Responsive mode → iPhone SE

---

## 📚 FILE UNTUK BELAJAR

Kalau mau belajar cara kerja code, baca file ini:

1. **styles-commented.css**
   - Penjelasan setiap baris CSS
   - Cara kerja warna, layout, responsive

2. **script-commented.js**
   - Penjelasan setiap baris JavaScript
   - Cara kerja menu, event, interaktivitas

Kedua file ini punya komentar SANGAT LENGKAP untuk pemula!

---

## 💡 TIPS EDIT YANG AMAN

1. **Backup dulu sebelum edit**
   - Copy folder TugasWeb → TugasWeb_backup

2. **Edit sedikit-sedikit**
   - Ubah 1 hal → Save → Test
   - Jangan ubah banyak sekaligus

3. **Pakai text editor yang bagus**
   - VS Code (Recommended) ✅
   - Sublime Text ✅
   - Notepad++ ✅
   - JANGAN pakai Notepad biasa ❌

4. **Jangan edit file "commented"**
   - File asli: styles.css ✅
   - File belajar: styles-commented.css ❌ (jangan edit!)

---

## 🆘 BUTUH BANTUAN?

### Error di Console?
1. F12 → Tab Console
2. Screenshot error
3. Google: "javascript [nama error]"

### Layout Berantakan?
1. F12 → Tab Elements
2. Klik element yang bermasalah
3. Lihat CSS di panel kanan

### Foto Tidak Muncul?
1. Klik kanan → Inspect
2. Lihat error di Console
3. Cek path file benar

---

## ✅ CHECKLIST FINAL

Sebelum submit tugas:

- [ ] Foto semua anggota sudah ada (atau emoji placeholder)
- [ ] ID semua anggota sudah diisi (6 orang)
- [ ] Website bisa dibuka tanpa error
- [ ] Semua link navigasi berfungsi
- [ ] Menu mobile berfungsi (test di HP atau F12)
- [ ] Footer sudah diganti dengan info tim
- [ ] Tidak ada teks Lorem Ipsum
- [ ] Sudah test di 2 browser (Chrome + Firefox)
- [ ] File ZIP berisi folder TugasWeb lengkap

---

**Selamat mengedit! Semoga berhasil! 🎉**
