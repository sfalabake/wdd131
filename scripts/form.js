document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    // Ensure placeholder is present and first
    if (!productSelect.querySelector("option")) {
        const placeholder = document.createElement("option");
        placeholder.textContent = "Select a Product ...";
        placeholder.value = "";
        placeholder.disabled = true;
        placeholder.selected = true;
        productSelect.appendChild(placeholder);
    }

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});
