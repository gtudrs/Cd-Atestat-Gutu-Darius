document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const cartCount = document.getElementById("cart-count");

    const products = [
        { name: "Black Pepper", price: 3.99, img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Black_peppercorns.jpg" },
    { name: "Paprika", price: 4.49, img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Paprika-powder.jpg" },
    { name: "Cumin", price: 3.79, img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Cumin-Whole.jpg" },
    { name: "Coriander", price: 3.99, img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Coriander_Seeds.JPG" },
    { name: "Turmeric", price: 4.29, img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Turmeric_rhizome_%28Curcuma_longa%29.jpg" },
    { name: "Cinnamon", price: 4.99, img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Cinnamon-stick-002.JPG" },
    { name: "Nutmeg", price: 5.49, img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Nutmeg_Dried.jpg" },
    { name: "Cloves", price: 6.49, img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Cloves-dried.jpg" },
    { name: "Bay Leaves", price: 2.99, img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bay_Laurel_%28Laurus_nobilis%29_leaves.jpg" },
    { name: "Ginger Powder", price: 4.99, img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Ground_ginger.jpg" },
    { name: "Garlic Powder", price: 3.99, img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Garlic_Powder.jpg" },
    { name: "Onion Powder", price: 3.49, img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Onion_Powder.jpg" },
    { name: "Cardamom", price: 7.99, img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Cardamom-Pods.jpg" },
    { name: "Fennel Seeds", price: 3.89, img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Fennel_seeds.JPG" },
    { name: "Mustard Seeds", price: 2.99, img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Mustard_seeds.JPG" },
    { name: "Saffron", price: 15.99, img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Saffron_Crop.JPG" },
    { name: "Fenugreek", price: 3.49, img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Fenugreek_seeds.jpg" },
    { name: "Chili Powder", price: 4.79, img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Chili_powder.JPG" },
    { name: "Allspice", price: 5.29, img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Allspice.jpg" },
    { name: "Star Anise", price: 6.99, img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Star_anise_%28Illicium_verum%29.jpg" }
    ];

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.img}" width="200px" height="150px">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
            <button class="add-to-cart">Add to Cart</button>
        `;

        div.querySelector(".add-to-cart").addEventListener("click", () => {
            addToCart(product);
            updateCartCount(); 
            window.dispatchEvent(new Event("storage")); 
        });

        productList.appendChild(div);
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItem = cart.find(item => item.name === product.name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    window.addEventListener("storage", updateCartCount);
    updateCartCount();
});