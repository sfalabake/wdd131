let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.getElementById("counter").textContent =
    `Total Reviews Submitted: ${count}`;
