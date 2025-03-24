document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const cartCount = document.getElementById("cart-count");

    const products = [
        { name: "Kosher Salt", price: 0.30, img: "https://media.istockphoto.com/id/1197314160/photo/sea-salt.jpg?s=612x612&w=0&k=20&c=Wi91MhzKWlFk_HLBwdnmOT4ccdTTCUaXA09I6Gove30=" },
        { name: "Black Pepper", price: 1.30, img: "https://static.vecteezy.com/system/resources/thumbnails/051/443/935/small/black-pepper-seeds-in-a-glass-bowl-surrounded-by-black-background-free-photo.jpg" },
        { name: "White Pepper", price: 1.50, img: "https://media.istockphoto.com/id/1050973194/photo/white-pepper.jpg?s=612x612&w=0&k=20&c=DjpIMo6xVDjGSGEorY3swcUmhlbgareBqscOhBOUh90=" },
        { name: "Cayenne Pepper", price: 2.00, img: "https://www.allrecipes.com/thmb/MXcg1fSxFsQQ_dEjLe9bUDvkEsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cayenne-Pepper-vs-Chili-Powder-3x2-1-9053e6b176074731ad78b596ec645b7d.png" },
        { name: "Paprika", price: 1.80, img: "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/25153812/Paprika.jpg" },
        { name: "Garlic Powder", price: 2.50, img: "https://www.marthastewart.com/thmb/0IJ204h9eWw-EVfdCYcNYBTnQyc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/power-of-garlic-powder-getty-1023-4b070d93e22b4765be0f18995d55723e.jpg" },
        { name: "Onion Powder", price: 2.00, img: "https://t3.ftcdn.net/jpg/12/79/99/60/360_F_1279996067_ASCfJUUA8Bg3pR6TzdofYdvxjmdpXddS.jpg" },
        { name: "Chili Powder", price: 1.90, img: "https://www.thespicecupboard.co.uk/wp-content/uploads/2022/12/The-Spice-Cupboard-Chilli-Powder-3.jpg" },
        { name: "Turmeric", price: 2.20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgUWX_Rn-rIa7VuYJ_iP4DmJ08XxcWWMoPg&s" },
        { name: "Ginger Powder", price: 2.50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92RD5GTf5NcoF9r8QTyossfNeaPPos9RtaQ&s" },
        { name: "Cumin", price: 1.80, img: "https://vibrantliving.in/cdn/shop/files/Cumin_543f69f0-f80b-42e7-b0c6-a45ee4d535b4.png?v=1731059986&width=2048" },
        { name: "Coriander", price: 1.90, img: "https://cdn.britannica.com/95/205795-050-EF644B7F/Bowl-cilantro-leaves-coriander-fruits-Coriandrum-sativum.jpg" },
        { name: "Fennel Seeds", price: 2.10, img: "https://nuttyyogi.com/cdn/shop/products/FennelSeeds.png?v=1680766914" },
        { name: "Mustard Seeds", price: 1.70, img: "https://silkroadspices.ca/cdn/shop/products/Mustard_Seeds_1024x1024.jpg?v=1521897250" },
        { name: "Caraway Seeds", price: 2.00, img: "https://draxe.com/wp-content/uploads/2019/01/Caraway_1230_630_Facebook.jpg" },
        { name: "Bay Leaves", price: 2.50, img: "https://images.healthshots.com/healthshots/en/uploads/2024/10/22153857/Bay-leaf.jpg" },
        { name: "Cinnamon", price: 3.00, img: "https://images.immediate.co.uk/production/volatile/sites/30/2016/08/cinnamon-benefits44-724deaf.jpg?quality=90&resize=440,400" },
        { name: "Cloves", price: 2.80, img: "https://www.organicfacts.net/wp-content/uploads/cloves.jpg" },
        { name: "Nutmeg", price: 3.20, img: "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/sites/8/2022/01/07153138/Nutmeg-1.jpg" },
        { name: "Allspice", price: 2.60, img: "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/coorg-spices-sarva-sugandi-allspice-berries-jamaica-peppe.20240222011606.webp" },
        { name: "Star Anise", price: 2.80, img: "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/04/22150646/Star-anise-copy.jpg" },
        { name: "Saffron", price: 10.00, img: "https://media.post.rvohealth.io/wp-content/uploads/2020/11/saffron-732x549-thumbnail.jpg" },
        { name: "Dill", price: 2.30, img: "https://cdn-bdcme.nitrocdn.com/YNVexMBpWKXfKFQpHsdWUgFTQYBFJoCh/assets/images/optimized/rev-f0a0aa3/kidsaregreatcooks.com/wp-content/uploads/2020/06/Dill-sm-1024x683.jpeg" },
        { name: "Dried Oregano", price: 2.00, img: "https://images.ctfassets.net/3s5io6mnxfqz/7By7Yaq4VZtBFazfzLnC82/a10feceed7691ffcdf2c545a7ea9cbef/AdobeStock_136031732.jpeg" },
        { name: "Dried Thyme", price: 2.40, img: "https://thekitchencommunity.org/wp-content/uploads/2024/02/image-307.jpeg" },
        { name: "Rosemary", price: 2.20, img: "https://www.islandorganicsbali.com/cdn/shop/products/rosemary.jpg?v=1677835706&width=1946" },
        { name: "Sage", price: 2.60, img: "https://ogden_images.s3.amazonaws.com/www.grit.com/images/2023/04/11143309/Bundle-of-sage-450x300.jpg" },
        { name: "Basil", price: 2.50, img: "https://draxe.com/wp-content/uploads/2017/12/BenefitsofBasilHeader.jpg" },
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