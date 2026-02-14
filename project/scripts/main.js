/**
 * Main Script for NaijaInfo & Weather Hub
 * Author: Solomon Oluwadunsin Falabake
 * Last Modified: 2026-02-14
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Logic
    const year = document.querySelector("#year");
    const lastModified = document.querySelector("#lastModified");

    if (year) year.textContent = new Date().getFullYear();
    if (lastModified) {
        lastModified.textContent = `Last Modification: ${document.lastModified}`;
    }

    // 2. Data Objects & Arrays
    const country = {
        name: "Nigeria",
        capital: "Abuja",
        population: 223000000,
        currency: "Naira (₦)",
        language: "English"
    };

    const cities = [
        { name: "Abuja", region: "FCT", population: 1235880, temp: 32 },
        { name: "Lagos", region: "South West", population: 14000000, temp: 30 },
        { name: "Kano", region: "North West", population: 4000000, temp: 35 },
        { name: "Ibadan", region: "South West", population: 3500000, temp: 29 },
        { name: "Port Harcourt", region: "South West", population: 3200000, temp: 31 }
    ];

    // 3. Display Country Info (Home Page)
    const displayCountryInfo = () => {
        const container = document.querySelector("#countryInfo");
        if (!container) return;

        // Using template literals as required
        container.innerHTML = `
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Currency:</strong> ${country.currency}</p>
            <p><strong>Official Language:</strong> ${country.language}</p>
        `;
    };

    // 4. City Directory (Cities Page)
    const renderCities = (cityArray) => {
        const container = document.querySelector("#citiesContainer");
        if (!container) return;

        // Performance Improvement: Build string first, then inject
        let cityHTML = "";
        cityArray.forEach(city => {
            cityHTML += `
                <div class="city-card">
                    <h3>${city.name}</h3>
                    <p><strong>Region:</strong> ${city.region}</p>
                    <p><strong>Population:</strong> ${city.population.toLocaleString()}</p>
                </div>
            `;
        });
        container.innerHTML = cityHTML;
    };

    // 5. Weather Logic (Home Page)
    const populateCityDropdown = () => {
        const select = document.querySelector("#citySelect");
        if (!select) return;

        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city.name;
            option.textContent = city.name;
            select.appendChild(option);
        });
    };

    const displayWeather = (cityName) => {
        const city = cities.find(c => c.name === cityName);
        const output = document.querySelector("#weatherOutput");
        if (!city || !output) return;

        // Conditional Branching
        const condition = city.temp > 31 ? "Hot & Humid" : "Tropical/Moderate";

        output.innerHTML = `
            <div class="weather-info">
                <p><strong>Selected City:</strong> ${city.name}</p>
                <p><strong>Temperature:</strong> ${city.temp}°C</p>
                <p><strong>Condition:</strong> ${condition}</p>
            </div>
        `;
    };

    // 6. LocalStorage Functionality
    const savePreferredCity = (cityName) => localStorage.setItem("preferredCity", cityName);

    const loadPreferredCity = () => {
        const saved = localStorage.getItem("preferredCity");
        const select = document.querySelector("#citySelect");
        if (saved && select) {
            select.value = saved;
            displayWeather(saved);
        }
    };

    // 7. Event Listeners
    const init = () => {
        displayCountryInfo();
        populateCityDropdown();
        loadPreferredCity();
        renderCities(cities);

        const select = document.querySelector("#citySelect");
        if (select) {
            select.addEventListener("change", (e) => {
                displayWeather(e.target.value);
                savePreferredCity(e.target.value);
            });
        }

        const regionFilter = document.querySelector("#regionFilter");
        if (regionFilter) {
            regionFilter.addEventListener("change", (e) => {
                const filtered = e.target.value === "All"
                    ? cities
                    : cities.filter(city => city.region === e.target.value);
                renderCities(filtered);
            });
        }

        const form = document.querySelector("#contactForm");
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const name = document.querySelector("#name").value;
                localStorage.setItem("lastUser", name);
                document.querySelector("#formResponse").innerHTML = `<p>Thank you, ${name}! Your inquiry has been sent.</p>`;
                form.reset();
            });
        }
    };

    init();
});