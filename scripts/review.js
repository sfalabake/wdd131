// scripts/review.js

// 1. Select the HTML element where the count will be displayed
const counterDisplay = document.querySelector("#counter");

// 2. Get the current value from localStorage. 
// Using a specific key name "reviewCount-ls".
// If it doesn't exist yet (first visit), we default to 0.
let numReviews = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

// 3. Increment the counter by 1 for the submission that just happened
numReviews++;

// 4. Update the text content of the counter element
if (counterDisplay) {
    counterDisplay.textContent = `Total Reviews Submitted: ${numReviews}`;
}

// 5. Save the updated count back to localStorage for the next visit
localStorage.setItem("reviewCount-ls", numReviews);