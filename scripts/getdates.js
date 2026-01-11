// Get current year
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Get last modified date
document.getElementById("lastModified").innerHTML =
  "Last Modification: " + document.lastModified;
