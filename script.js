
const menubtn = document.getElementById("menu-btn");
const navlink = document.getElementById("nav-links");
const menubtnIcon = menubtn.querySelector("i");

menubtn.addEventListener("click", () => {
    navlink.classList.toggle("open");
    const isOpen = navlink.classList.contains("open");
    menubtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navlink.addEventListener("click", () => {
    navlink.classList.remove("open");
    menubtnIcon.setAttribute("class", "ri-menu-line");
});

// Search bar toggle
const navsearch = document.getElementById("nav-search");
navsearch.addEventListener("click", () => {
    navsearch.classList.toggle("open");
});

// 🛒 Cart functionality
let cart = {};

// Add product to cart
function addToCart(productName, productPrice) {
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        cart[productName] = {
            quantity: 1,
            totalPrice: productPrice
        };
    }
    updateCartDisplay();
}

// Remove product from cart
function removeFromCart(productName) {
    if (cart[productName]) {
        delete cart[productName];
        updateCartDisplay();
    }
}

// Update cart UI
function updateCartDisplay() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    if (Object.keys(cart).length === 0) {
        cartList.innerHTML = "<li>Your cart is empty</li>";
        return;
    }

    for (let product in cart) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${product} - Quantity: ${cart[product].quantity} - Total Price: $ ${cart[product].totalPrice.toFixed(2)}
            <button class="remove-btn" data-product="${product}">Remove</button>
        `;
        cartList.appendChild(listItem);
    }

    // Attach remove button events
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const productName = btn.getAttribute("data-product");
            removeFromCart(productName);
        });
    });
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll(".product__card button").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".product__card");
        const nameEl = card.querySelector("h5") || card.querySelector("h4");
        const priceText = card.querySelector("p b")?.innerText.replace("$", "").trim();
        const productName = nameEl.innerText;
        const productPrice = parseFloat(priceText);
        addToCart(productName, productPrice);
    });
});
