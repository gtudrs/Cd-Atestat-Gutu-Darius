document.addEventListener("DOMContentLoaded", () => {
    const cartTable = document.getElementById("cart-items");
    const totalAmount = document.getElementById("total-amount");
    const clearCartButton = document.getElementById("clear-cart");
    const cartCount = document.getElementById("cart-count");

    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartTable.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <button class="decrease-qty" data-index="${index}">-</button>
                    ${item.quantity}
                    <button class="increase-qty" data-index="${index}">+</button>
                </td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
            `;

            total += item.price * item.quantity;
            cartTable.appendChild(row);
        });

        totalAmount.textContent = total.toFixed(2);
        updateCartCount();
        attachEventListeners();
        setupPayPal(total);
    }

    function attachEventListeners() {
        document.querySelectorAll(".increase-qty").forEach(button => {
            button.addEventListener("click", () => updateQuantity(button.dataset.index, 1));
        });

        document.querySelectorAll(".decrease-qty").forEach(button => {
            button.addEventListener("click", () => updateQuantity(button.dataset.index, -1));
        });

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", () => removeItem(button.dataset.index));
        });

        clearCartButton.addEventListener("click", () => {
            localStorage.removeItem("cart");
            updateCartUI();
        });
    }

    function updateQuantity(index, change) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (cart[index].quantity + change > 0) {
            cart[index].quantity += change;
        } else {
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
    }

    function removeItem(index) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
    }

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    function updateCartUI() {
        loadCart();
        window.dispatchEvent(new Event("storage"));
    }

    function setupPayPal(total) {
        document.getElementById("paypal-button-container").innerHTML = "";
        
        if (total > 0) {
            paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: total.toFixed(2)
                            }
                        }]
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then(() => {
                        alert("Payment successful! Thank you for your order.");
                        localStorage.removeItem("cart");
                        updateCartUI();
                    });
                },
                onError: (err) => {
                    console.error(err);
                    alert("An error occurred during payment.");
                }
            }).render("#paypal-button-container");
        }
    }

    window.addEventListener("storage", loadCart);
    loadCart();
});

