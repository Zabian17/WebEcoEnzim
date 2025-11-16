/* ============================================
   WEBSITE EDUKASI ECO ENZIM
   File: script.js
   Deskripsi: JavaScript untuk interaktivitas website

   PENJELASAN UNTUK PEMULA:
   - JavaScript = Bahasa pemrograman untuk membuat website interaktif
   - Function = Kumpulan kode yang bisa dipanggil berulang kali
   - Event = Aksi yang terjadi (klik, scroll, dll)
   - DOM = Document Object Model (struktur HTML di browser)

   CARA KERJA FILE INI:
   1. Browser load HTML
   2. Browser load CSS (tampilan)
   3. Browser load JavaScript (ini file)
   4. JavaScript menambahkan interaktivitas
   ============================================ */

/* ==========================================
   FUNCTION 1: toggleMenu()

   FUNGSI:
   Membuka/menutup menu mobile (hamburger menu)

   CARA KERJA:
   1. Cari element hamburger dan mobile-menu di HTML
   2. Toggle class "active" (tambah/hapus)
   3. Class "active" di CSS akan tampilkan menu

   DIPANGGIL SAAT:
   User klik icon hamburger (☰)
   ========================================== */
function toggleMenu() {
  // querySelector = Cari element berdasarkan class
  // .hamburger = Class hamburger di HTML
  const hamburger = document.querySelector('.hamburger');

  // Cari element mobile menu
  const mobileMenu = document.querySelector('.mobile-menu');

  // if = Kondisi (kalau ada hamburger dan mobileMenu)
  if (hamburger && mobileMenu) {
    // classList.toggle = Tambah/hapus class
    // Kalau belum ada class "active", tambahkan
    // Kalau sudah ada, hapus
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  }

  /* PENJELASAN CLASS "active":
     - Di CSS, ada style .hamburger.active (animasi jadi X)
     - Ada juga .mobile-menu.active (tampilkan menu)
     - Toggle akan ON/OFF class tersebut
  */
}

/* ==========================================
   FUNCTION 2: closeMobileMenu()

   FUNGSI:
   Menutup menu mobile (menghapus class "active")

   CARA KERJA:
   1. Cari element hamburger dan mobile-menu
   2. Hapus class "active" dari keduanya
   3. Menu akan tertutup (display: none di CSS)

   DIPANGGIL SAAT:
   - User klik link di dalam menu
   - User klik di luar menu
   - Window di-resize jadi desktop
   ========================================== */
function closeMobileMenu() {
  // Cari element yang sama
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Kalau ada, hapus class "active"
  if (hamburger && mobileMenu) {
    // .remove() = Hapus class tertentu
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  }
}

/* ==========================================
   FUNCTION 3: setActiveNavLink()

   FUNGSI:
   Menandai link navigasi yang aktif (halaman saat ini)

   CARA KERJA:
   1. Ambil nama file halaman saat ini (index.html, about.html, dll)
   2. Cari semua link navigasi
   3. Kalau link menuju halaman saat ini, tambah class "active"
   4. Di CSS, .active punya warna berbeda (hijau muda)

   DIPANGGIL SAAT:
   - Halaman pertama kali load
   - User pindah halaman
   ========================================== */
function setActiveNavLink() {
  // window.location.pathname = URL path saat ini
  // Contoh: "/about.html" atau "/TugasWeb/index.html"

  // .split('/') = Pecah string berdasarkan "/"
  // .pop() = Ambil elemen terakhir
  // Hasilnya: "index.html", "about.html", dll
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // querySelectorAll = Cari SEMUA element dengan selector
  // 'nav a' = Semua link (<a>) di dalam <nav>
  // Hasilnya: Array berisi semua link navigasi
  const navLinks = document.querySelectorAll('nav a, .mobile-menu a');

  // forEach = Loop untuk setiap element
  // Mirip for loop, tapi khusus untuk array
  navLinks.forEach(link => {
    // getAttribute = Ambil nilai attribute
    // href = Tujuan link ("index.html", "about.html", dll)
    const href = link.getAttribute('href');

    // Cek apakah href sama dengan currentPage
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      // Kalau sama, tambah class "active"
      link.classList.add('active');
    } else {
      // Kalau tidak, hapus class "active" (kalau ada)
      link.classList.remove('active');
    }
  });

  /* HASIL:
     - Link halaman saat ini akan punya class "active"
     - Di CSS, nav a.active punya warna berbeda
     - User tahu sedang di halaman mana
  */
}

/* ==========================================
   FUNCTION 4: initEventListeners()

   FUNGSI:
   Menginisialisasi semua event listener (pendengar event)

   CARA KERJA:
   Pasang "pendengar" di berbagai element:
   - Hamburger button → Klik → toggleMenu()
   - Mobile menu links → Klik → closeMobileMenu()
   - Document → Klik di luar → closeMobileMenu()
   - Window → Resize → Cek lebar, tutup menu kalau desktop

   EVENT LISTENER = Fungsi yang dipanggil saat event terjadi

   DIPANGGIL SAAT:
   Halaman pertama kali load (di DOMContentLoaded)
   ========================================== */
function initEventListeners() {
  /* ===== EVENT 1: Klik Hamburger ===== */

  // Cari element hamburger button
  const hamburger = document.querySelector('.hamburger');

  // Kalau ada (untuk safety, hindari error)
  if (hamburger) {
    // addEventListener = Pasang event listener
    // 'click' = Event klik
    // toggleMenu = Function yang dipanggil saat klik
    hamburger.addEventListener('click', toggleMenu);

    /* PENJELASAN:
       - Setiap kali user klik hamburger
       - Browser akan jalankan function toggleMenu()
       - toggleMenu() akan buka/tutup menu
    */
  }

  /* ===== EVENT 2: Klik Link di Mobile Menu ===== */

  // Cari SEMUA link di mobile menu
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  // Loop setiap link
  mobileMenuLinks.forEach(link => {
    // Pasang event listener ke setiap link
    link.addEventListener('click', closeMobileMenu);

    /* PENJELASAN:
       - Saat user klik link (pindah halaman)
       - Menu otomatis tertutup
       - Pengalaman user lebih baik
    */
  });

  /* ===== EVENT 3: Klik di Luar Menu ===== */

  // Pasang listener ke seluruh document
  document.addEventListener('click', (e) => {
    // Arrow function: (parameter) => { code }
    // e = event object (info tentang klik)

    // Cari element hamburger dan menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Cek apakah menu sedang terbuka
    if (hamburger && mobileMenu && hamburger.classList.contains('active')) {
      // contains() = Cek apakah punya class tertentu

      // e.target = Element yang di-klik
      // contains() = Cek apakah element tertentu di dalam parent

      // Kalau yang diklik BUKAN hamburger DAN BUKAN menu
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        // Tutup menu
        closeMobileMenu();
      }
    }

    /* PENJELASAN:
       - Kalau menu terbuka
       - User klik di bagian lain website (bukan menu)
       - Menu otomatis tertutup
       - UX lebih baik
    */
  });

  /* ===== EVENT 4: Window Resize ===== */

  // Pasang listener ke window (browser window)
  window.addEventListener('resize', () => {
    // Arrow function tanpa parameter

    // window.innerWidth = Lebar browser dalam pixel
    // 768 = Breakpoint antara mobile dan desktop

    if (window.innerWidth >= 768) {
      // Kalau lebar ≥768px (desktop)
      // Tutup mobile menu (kalau sedang terbuka)
      closeMobileMenu();
    }

    /* PENJELASAN:
       - User buka menu di mobile (portrait)
       - User putar device ke landscape (atau maximize window)
       - Menu otomatis tertutup karena sudah ada menu desktop
       - Hindari menu mobile tampil di desktop
    */
  });
}

/* ==========================================
   EVENT: DOMContentLoaded

   PENJELASAN:
   - DOMContentLoaded = Event saat HTML selesai load
   - Tapi gambar/CSS belum tentu selesai
   - Waktu yang tepat untuk jalankan JavaScript

   CARA KERJA:
   1. Browser load dan parse HTML
   2. DOM tree siap
   3. Event DOMContentLoaded dipanggil
   4. JavaScript di dalam ini dijalankan

   KENAPA PAKAI INI:
   - Kalau JavaScript jalan sebelum HTML load
   - querySelector akan return null (tidak ketemu)
   - Script akan error
   - DOMContentLoaded memastikan HTML sudah siap
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  /* Arrow function, dijalankan saat DOM ready */

  // 1. Set link navigasi yang aktif
  setActiveNavLink();

  // 2. Pasang semua event listener
  initEventListeners();

  // 3. Log ke console (untuk debugging)
  console.log('Website Eco Enzim berhasil dimuat!');
  console.log('Menu interaktif siap digunakan.');

  /* URUTAN PENTING:
     1. setActiveNavLink dulu (agar link aktif terlihat)
     2. initEventListeners (agar menu bisa diklik)
     3. console.log (opsional, untuk debugging)
  */
});

/* ==========================================
   EVENT: pageshow

   PENJELASAN:
   - pageshow = Event saat halaman ditampilkan
   - Dipanggil setiap kali halaman tampil
   - Termasuk saat back/forward dari browser cache

   KENAPA PERLU:
   - Beberapa browser pakai "bfcache" (back-forward cache)
   - Saat user tekan tombol Back, halaman dimuat dari cache
   - DOMContentLoaded TIDAK dipanggil lagi
   - pageshow selalu dipanggil, termasuk dari cache

   FUNGSI:
   - Re-initialize active link
   - Pastikan highlight tetap benar saat back/forward
   ========================================== */
window.addEventListener('pageshow', () => {
  // Panggil lagi setActiveNavLink
  setActiveNavLink();

  /* PENJELASAN:
     - User di halaman About
     - Klik link ke Process
     - Klik tombol Back browser
     - Kembali ke About
     - pageshow dipanggil
     - setActiveNavLink() memastikan "About" tetap highlight
  */
});

/* ===========================================
   RINGKASAN FLOW LENGKAP:

   1. USER LOAD HALAMAN
      ↓
   2. HTML DI-PARSE
      ↓
   3. DOMContentLoaded EVENT
      ↓
   4. setActiveNavLink() → Highlight link aktif
      ↓
   5. initEventListeners() → Pasang semua listener
      ↓
   6. WEBSITE SIAP DIGUNAKAN

   7. USER KLIK HAMBURGER
      ↓
   8. toggleMenu() → Buka menu
      ↓
   9. USER KLIK LINK
      ↓
   10. closeMobileMenu() → Tutup menu
      ↓
   11. Browser load halaman baru (kembali ke step 1)

   TIPS DEBUGGING:
   - Buka Developer Tools (F12)
   - Tab Console untuk lihat error
   - console.log() untuk debug
   - Breakpoint di Sources tab
   =========================================== */

/* ===========================================
   CARA EDIT FILE INI:

   1. GANTI WARNA/STYLE
      → Edit styles.css, bukan file ini

   2. TAMBAH ANIMASI
      → Bisa edit styles.css (CSS animation)
      → Atau tambah JavaScript di sini

   3. TAMBAH FITUR BARU
      → Buat function baru (seperti function di atas)
      → Panggil di initEventListeners()
      → Test di browser

   4. FIX BUG
      → Lihat error di Console
      → Tambah console.log() untuk debug
      → Test di berbagai browser

   CONTOH TAMBAH FITUR:

   function myNewFeature() {
     // Kode fitur baru
     console.log('Fitur baru!');
   }

   // Lalu di initEventListeners():
   const button = document.querySelector('.my-button');
   if (button) {
     button.addEventListener('click', myNewFeature);
   }
   =========================================== */
