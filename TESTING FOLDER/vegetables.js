document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const cartCount = document.getElementById("cart-count");

    const products = [
        { name: "Tomato", price: 1.50, img: "https://tagawagardens.com/wp-content/uploads/2023/08/TOMATOES-RED-RIPE-VINE-SS-1-1024x681.jpg" },
        { name: "Potato", price: 0.80, img: "https://media.istockphoto.com/id/1136585606/photo/potatoes-in-basket.jpg?s=612x612&w=0&k=20&c=G3y6bjXQZiRFBI1bXcOZ-lrmYlao7NmUgnFRhJHI5K8=" },
        { name: "Carrot", price: 1.20, img: "https://www.quailseeds.com/uploads/1/1/5/4/115443073/s427523656761687877_p573_i2_w520.png" },
        { name: "Broccoli", price: 2.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0Ur3YpxsH9i7qFtEqywv74mJHhVutsPf25yCgH-O6-EQqGLOLllN7U7ByIGtWLJv7ss&usqp=CAU" },
        { name: "Cucumber", price: 1.10, img: "https://www.highmowingseeds.com/media/catalog/product/cache/95cbc1bb565f689da055dd93b41e1c28/2/4/2423-1_6.jpg" },
        { name: "Spinach", price: 1.80, img: "https://www.trustbasket.com/cdn/shop/articles/Spinach.webp?v=1686909241" },
        { name: "Bell Pepper", price: 1.50, img: "https://freerangestock.com/sample/107130/red-pepper-and-yellow-pepper-on-black-background.jpg" },
        { name: "Onion", price: 0.90, img: "https://media.istockphoto.com/id/878592020/photo/fresh-onion-bulbs.jpg?s=612x612&w=0&k=20&c=5Gds2SUhav1drOEB1daikgg5DfR2iZuWpFbkUyVDhTc=" },
        { name: "Garlic", price: 1.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRzqzKIwhoBL8CLBObCZ6qsp9z7nlbH_C7w&s" },
        { name: "Zucchini", price: 1.40, img: "https://img.freepik.com/premium-photo/realistic-8k-photo-green-zucchini-dark-minimalist-background_899449-93948.jpg" },
        { name: "Lettuce", price: 0.70, img: "https://img.freepik.com/premium-photo/photo-lettuce-black-background_951562-1073.jpg?w=360" },
        { name: "Asparagus", price: 3.00, img: "https://img.freepik.com/premium-photo/asparagus-dark-background-low-key_335439-162.jpg" },
        { name: "Cauliflower", price: 2.50, img: "https://img.freepik.com/premium-photo/fresh-cauliflower-black-background-closeup_550548-968.jpg" },
        { name: "Eggplant", price: 1.80, img: "https://img.pikbest.com/ai/illus_our/20230421/7abec224c19aaf87e1d86a0869846f57.jpg!w700wp" },
        { name: "Sweet Potato", price: 1.60, img: "https://img.freepik.com/premium-photo/raw-sweet-potatoes-organic-yam-farm-food-black-background_89816-7231.jpg" },
        { name: "Mushrooms", price: 2.20, img: "https://img.pikbest.com/ai/illus_our/20230423/d199326d44ddac4701a10d353d763da6.jpg!f305cw" },
        { name: "Green Beans", price: 1.30, img: "https://img.pikbest.com/wp/202345/black-bean-background-green-beans-on_9595214.jpg!w700wp" },
        { name: "Peas", price: 1.00, img: "https://cbx-prod.b-cdn.net/COLOURBOX29529620.jpg?width=800&height=800&quality=70" },
        { name: "Cabbage", price: 1.50, img: "https://img.pikbest.com/wp/202345/cabbage-full-head-of-is-sitting-on-a-black-background_9580558.jpg!w700wp" },
        { name: "Radish", price: 1.00, img: "https://backareagardens.co.za/wp-content/uploads/2018/05/radishes-1485888_640.jpg" },
        { name: "Brussels Sprouts", price: 2.30, img: "https://www.generalandmedical.com/media/3900/brussels-main.jpg?anchor=center&mode=crop&width=1200&height=600&rnd=132212480430000000" },
        { name: "Artichoke", price: 3.50, img: "https://storables.com/wp-content/uploads/2023/09/how-to-store-an-artichoke-1694192344.jpg" },
        { name: "Leek", price: 2.00, img: "https://img.pikbest.com/wp/202345/leek-3-head-onions-fresh-green-raw-leeks-on-wooden-background_9602516.jpg!w700wp" },
        { name: "Chard", price: 2.10, img: "https://img.freepik.com/premium-photo/vibrant-fresh-bundle-ruby-red-swiss-chard-leaves-arranged-rustic-dark-background_996993-51803.jpg" },
        { name: "Kale", price: 2.00, img: "https://img.freepik.com/premium-photo/fresh-green-kale-leaf-king-nutrition-set-black-wooden-table-background_249006-13676.jpg" },
        { name: "Pumpkin", price: 2.60, img: "https://img.freepik.com/premium-photo/pumpkins-wooden-table_434193-2154.jpg" },
        { name: "Butternut Squash", price: 2.40, img: "https://img.freepik.com/premium-photo/butternut-squash-isolated-black-background_118047-12271.jpg" },
        { name: "Fennel", price: 2.10, img: "https://media.istockphoto.com/id/635774208/photo/fennel-dark-background.jpg?s=612x612&w=0&k=20&c=sBMQBbQASLUWO_7ue81qAJ0qpPhtAvdLYPatvPqGSW0=" },
        { name: "Arugula", price: 2.00, img: "https://img.freepik.com/premium-photo/arugula-white-background_1071931-18635.jpg" },
        { name: "Chili Pepper", price: 1.90, img: "https://media.istockphoto.com/id/1129366965/photo/red-spisy-small-chili-peppers.jpg?s=612x612&w=0&k=20&c=oY65KbsJWRU-LOnXDdMpElq_fzeBv0dG1qj-1Iz2wU8=" },
        { name: "Beetroot", price: 2.00, img: "https://5.imimg.com/data5/DP/QK/OH/SELLER-31130754/beetroot-jpg-500x500.jpg" },
        { name: "Celery", price: 1.60, img: "https://www.shutterstock.com/image-photo/fresh-celery-leaves-stalks-on-600nw-1703543833.jpg" }        
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