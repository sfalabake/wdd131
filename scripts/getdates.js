// scripts/getdates.js
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#year");
  const lastModSpan = document.querySelector("#lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  if (lastModSpan) {
    lastModSpan.textContent = document.lastModified;
  }
});