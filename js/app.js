const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// Add fixed class to navbar

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// Show sidebar

navBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// Set date

date.innerHTML = new Date().getFullYear();
