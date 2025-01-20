// JavaScript to add functionality for "Add to Cart" buttons

// Function to handle adding products to the cart
function addToCart(event) {
    const product = event.target.dataset.product;
    alert(`${product} added to cart!`);
}

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});