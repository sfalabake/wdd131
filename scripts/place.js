// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("modified").textContent = document.lastModified;

// Get temperature and wind values from HTML
let tempValue = parseFloat(document.getElementById("temp").textContent) || 0;
let windValue = parseFloat(document.getElementById("wind").textContent) || 0;
const windChillSpan = document.getElementById("windchill");

// Wind Chill calculation
function calculateWindChill(t, v) {
  return (13.12 + 0.6215*t - 11.37*Math.pow(v,0.16) + 0.3965*t*Math.pow(v,0.16)).toFixed(1);
}

// Update Wind Chill
if (tempValue <= 10 && windValue > 4.8) {
  windChillSpan.textContent = `${calculateWindChill(tempValue, windValue)}°C`;
} else {
  windChillSpan.textContent = "N/A";
}

// Add units to temp and wind dynamically
document.getElementById("temp").textContent = `${tempValue}°C`;
document.getElementById("wind").textContent = `${windValue} km/h`;
