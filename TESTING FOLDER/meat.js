document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            let product = button.closest(".product");
            let name = product.querySelector("h3").textContent;
            let price = parseFloat(product.querySelector(".price").textContent.replace("$", ""));
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            let existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        });
    });

    updateCartCount();
});

