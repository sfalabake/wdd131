/**
 * WDD 131: Lazyload Activity
 * Author: Solomon Oluwadunsin Falabake
 */

// Select footer elements
const yearSpan = document.querySelector("#year");
const lastModifiedElement = document.querySelector("#lastModified");

// Set current year
const today = new Date();
yearSpan.textContent = today.getFullYear();

// Set last modification date
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
