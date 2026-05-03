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
