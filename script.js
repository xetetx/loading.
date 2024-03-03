document.addEventListener('DOMContentLoaded', () => {
    // Fade out the loading animation
    setTimeout(() => {
        const loadingAnimation = document.getElementById('loading-animation');
        loadingAnimation.style.opacity = '0';
        loadingAnimation.addEventListener('transitionend', () => loadingAnimation.remove());
    }, 3000); // Adjust time as needed

    // Market basket click animation
    const basket = document.querySelector('.market-basket');
    basket.addEventListener('click', () => {
        // Example of a simple scale animation
        basket.style.transform = 'scale(1.1)';
        setTimeout(() => basket.style.transform = 'scale(1)', 200);
    });
});
