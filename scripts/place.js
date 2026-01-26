document.addEventListener("DOMContentLoaded", () => {

    // Set current year and last modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("modified").textContent = document.lastModified;

    const tempEl = document.getElementById("temp");
    const windEl = document.getElementById("wind");
    const chillEl = document.getElementById("windchill");

    const temp = parseFloat(tempEl.textContent.trim());
    const wind = parseFloat(windEl.textContent.trim());

    function calculateWindChill(t, v) {
        return (
            13.12 +
            0.6215 * t -
            11.37 * Math.pow(v, 0.16) +
            0.3965 * t * Math.pow(v, 0.16)
        ).toFixed(1);
    }

    // Calculate wind chill if conditions are met
    if (!isNaN(temp) && !isNaN(wind) && temp <= 10 && wind > 4.8) {
        chillEl.textContent = calculateWindChill(temp, wind);
    } else {
        chillEl.textContent = "N/A";
    }

    // Display temperature and wind without units (units are in HTML)
    if (!isNaN(temp)) tempEl.textContent = temp.toFixed(1);
    if (!isNaN(wind)) windEl.textContent = wind.toFixed(1);
});