// Get current year
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Get last modified date
document.getElementById("lastModified").innerHTML =
  "Last Modification: " + document.lastModified;

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