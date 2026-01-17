// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Menu toggle
const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("primary-nav");

if (menuButton && nav) {
  menuButton.setAttribute("aria-expanded", "false");

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    // Toggle icon
    menuButton.textContent = isOpen ? "❎" : "☰";

    // Update accessibility state
    menuButton.setAttribute("aria-expanded", isOpen);
  });

  // Reset on desktop resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 600) {
      nav.classList.remove("open");
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}
