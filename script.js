// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listeners to "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the product name from the data-product attribute
        const productName = button.getAttribute('data-product');

        // Show a confirmation message
        alert(`${productName} added to cart!`);
    });
});