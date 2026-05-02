var currentLang = "EN";
var t = {
  EN: {
    "nav-home": "Home",
    "nav-rooms": "Rooms",
    "nav-about": "About",
    "nav-contact": "Contact",
    "nav-cta-btn": "Reserve",
    "h-eyebrow": "Luxury Redefined — Jakarta",
    "h-title": "Where Comfort Meets <em>Timeless Elegance</em>",
    "h-sub": "An intimate retreat crafted for the discerning traveller",
    "h-btn1": "Explore Rooms",
    "h-btn2": "Our Story",
    "h-scroll": "Scroll",
    "b-check-in": "Check-in",
    "b-check-out": "Check-out",
    "b-guests": "Guests",
    "b-room": "Room Type",
    "b-btn": "Check Availability",
    "b-all": "All Rooms",
    "intro-tag": "Welcome to The Grand",
    "intro-title": "A Sanctuary Above the City",
    "intro-text":
      "Nestled in the heart of Jakarta, The Grand offers an unparalleled blend of contemporary luxury and timeless hospitality. Every detail — from the hand-picked furnishings to the bespoke dining experience — has been curated to exceed your expectations.",
    "r-tag": "Accommodations",
    "r-title": "Our Rooms & Suites",
    "r-see-all": "View All Rooms",
    "exp-tag": "Experiences",
    "exp-title": "More Than Just a Stay",
    "exp-text":
      "Every moment at The Grand is designed to delight. From sunrise yoga on the rooftop to private in-room dining crafted by our Michelin-trained chef, we ensure your stay is nothing short of extraordinary.",
    "testi-title": "Words from Our Guests",
    "cta-title": "Reserve Your Stay Today",
    "cta-sub":
      "Exclusive rates available for direct bookings — complimentary breakfast included",
    "rp-tag": "Accommodations",
    "rp-title": "Rooms & Suites",
    "ab-tag": "Our Heritage",
    "ab-title": "Nearly Four Decades of Crafted Hospitality",
    "ab-p1":
      "Founded in 1987, The Grand has been synonymous with luxury hospitality in Jakarta for nearly four decades. What began as a vision to create an intimate, world-class retreat has grown into one of Southeast Asia's most celebrated addresses.",
    "ab-p2":
      "Every element of The Grand — from the Italian marble floors to the hand-woven batik wall panels — reflects our deep commitment to Indonesian culture and global luxury standards.",
    "ct-title": "Plan Your Stay",
    "ct-sub":
      "Our reservations team is available 24 hours a day to craft the perfect experience for you. We look forward to welcoming you.",
  },
  ID: {
    "nav-home": "Beranda",
    "nav-rooms": "Kamar",
    "nav-about": "Tentang",
    "nav-contact": "Kontak",
    "nav-cta-btn": "Pesan",
    "h-eyebrow": "Kemewahan Sejati — Jakarta",
    "h-title": "Di Mana Kenyamanan Bertemu <em>Keeleganan Abadi</em>",
    "h-sub": "Surga pribadi yang dirancang untuk tamu istimewa",
    "h-btn1": "Jelajahi Kamar",
    "h-btn2": "Kisah Kami",
    "h-scroll": "Gulir",
    "b-check-in": "Check-in",
    "b-check-out": "Check-out",
    "b-guests": "Tamu",
    "b-room": "Tipe Kamar",
    "b-btn": "Cek Ketersediaan",
    "b-all": "Semua Kamar",
    "intro-tag": "Selamat Datang di The Grand",
    "intro-title": "Surga di Atas Kota",
    "intro-text":
      "Terletak di jantung Jakarta, The Grand menawarkan perpaduan kemewahan kontemporer dan keramahan abadi yang tak tertandingi. Setiap detail — dari furnitur pilihan hingga pengalaman bersantap eksklusif — dikurasi untuk melampaui ekspektasi Anda.",
    "r-tag": "Akomodasi",
    "r-title": "Kamar & Suite Kami",
    "r-see-all": "Lihat Semua Kamar",
    "exp-tag": "Pengalaman",
    "exp-title": "Lebih dari Sekadar Menginap",
    "exp-text":
      "Setiap momen di The Grand dirancang untuk menyenangkan. Dari yoga saat matahari terbit di rooftop hingga private dining oleh chef bertaraf Michelin — kami memastikan masa menginap Anda sungguh luar biasa.",
    "testi-title": "Kata Para Tamu Kami",
    "cta-title": "Pesan Kamar Anda Sekarang",
    "cta-sub":
      "Harga eksklusif untuk pemesanan langsung — sarapan gratis included",
    "rp-tag": "Akomodasi",
    "rp-title": "Kamar & Suite",
    "ab-tag": "Warisan Kami",
    "ab-title": "Hampir Empat Dekade Keramahan Terbaik",
    "ab-p1":
      "Didirikan pada 1987, The Grand telah identik dengan keramahan mewah di Jakarta selama hampir empat dekade. Berawal dari visi menciptakan retreat intim berkelas dunia, kini menjadi salah satu alamat paling terkenal di Asia Tenggara.",
    "ab-p2":
      "Setiap elemen The Grand — dari lantai marmer Italia hingga panel batik tenun tangan — mencerminkan komitmen mendalam kami terhadap budaya Indonesia dan standar kemewahan global.",
    "ct-title": "Rencanakan Kunjungan Anda",
    "ct-sub":
      "Tim reservasi kami siap 24 jam sehari untuk merancang pengalaman sempurna bagi Anda. Kami menantikan kedatangan Anda.",
  },
};

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.textContent === lang);
  });
  var tr = t[lang];
  Object.keys(tr).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = tr[id];
  });
}

function showPage(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  var n = document.getElementById("nav-" + page);
  if (n) n.classList.add("active");
  window.scrollTo(0, 0);
  updateNav();
}

function updateNav() {
  var nav = document.getElementById("mainNav");
  var activePage = document.querySelector(".page.active");
  var isHome = activePage && activePage.id === "page-home";
  var scrolled = window.scrollY > 80;
  if (isHome) {
    nav.className = scrolled ? "scrolled" : "";
  } else {
    nav.className = "on-light";
  }
}

window.addEventListener("scroll", updateNav);
updateNav();
