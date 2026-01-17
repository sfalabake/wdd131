// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Menu toggle
const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("primary-nav");

if (menuButton && nav) {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-controls", "primary-nav");

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 600) {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}
