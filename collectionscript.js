<script>
        // This script adds hover effects to the category items
        const categoryItems = document.querySelectorAll('.category-item');

        categoryItems.forEach(item => {
            item.addEventListener('mouseover', function() {
                item.style.transform = 'scale(1.05)';
                item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            });

            item.addEventListener('mouseout', function() {
                item.style.transform = 'scale(1)';
                item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });
        });

        // Add "Add to Cart" functionality
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                alert('Item added to cart!');
            });
        });
    </script>
