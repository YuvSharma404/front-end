const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Remove 'focused' class from all items
        galleryItems.forEach(i => i.classList.remove('focused'));

        // Add 'focused' class to the current item
        item.classList.add('focused');
    });

    item.addEventListener('mouseleave', () => {
        // Remove 'focused' class on mouse leave
        item.classList.remove('focused');
    });
});
