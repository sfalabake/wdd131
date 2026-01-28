// Temple data array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    // Add additional temples here...
];

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// Menu toggle
const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("primary-nav");

if (menuButton && nav) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuButton.textContent = isOpen ? "❎" : "☰";
        menuButton.setAttribute("aria-expanded", isOpen);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 600) {
            nav.classList.remove("open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
}

// Function to generate temple cards
const templeContainer = document.getElementById("temple-cards");

function displayTemples(list) {
    templeContainer.innerHTML = ""; // Clear previous cards
    list.forEach(temple => {
        const card = document.createElement("figure");
        card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <strong>${temple.templeName}</strong><br>
        <span>Location:</span> ${temple.location}<br>
        <span>Dedicated:</span> ${temple.dedicated}<br>
        <span>Size:</span> ${temple.area.toLocaleString()} sq ft
      </figcaption>
    `;
        templeContainer.appendChild(card);
    });
}

// Initial display: all temples
displayTemples(temples);

// Filtering
document.querySelectorAll('#primary-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;
        let filtered = temples;

        if (filter === "old") {
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        } else if (filter === "new") {
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        } else if (filter === "large") {
            filtered = temples.filter(t => t.area > 90000);
        } else if (filter === "small") {
            filtered = temples.filter(t => t.area < 10000);
        }

        displayTemples(filtered);
    });
});
