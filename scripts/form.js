// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    // Populate the select element with products from products.js
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name; // The text the user sees
        productSelect.appendChild(option);
    });
});