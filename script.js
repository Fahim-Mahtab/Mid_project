let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} added to cart!`);
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    let totalPrice = 0;
    cartContainer.innerHTML = '';

    cartItems.forEach(item => {
        totalPrice += item.price;
        cartContainer.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    });

    totalPriceElement.textContent = totalPrice;
}


if (window.location.pathname.includes('cart.html')) {
    loadCart();
}