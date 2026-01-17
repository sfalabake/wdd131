// Footer dynamic year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
