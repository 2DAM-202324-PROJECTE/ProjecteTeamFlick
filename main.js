import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()


document.addEventListener('DOMContentLoaded', function () {
    const spotlightDiv = document.getElementById('mySpotlightDiv');
    const toggleButton = document.getElementById('toggleButton');
    const spotlightOverlay = document.getElementById('spotlightOverlay');
    let isSpotlightActive = window.innerWidth > 768; // Change the threshold as needed

    function updateSpotlightPosition(e) {
        if (isSpotlightActive) {
            const rect = spotlightDiv.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            spotlightDiv.style.setProperty('--cursor-x', `${x}px`);
            spotlightDiv.style.setProperty('--cursor-y', `${y}px`);
        }
    }

    function toggleSpotlightEffects() {
        // Toggle both spotlight effect and darkening effect
        if (isSpotlightActive) {
            spotlightOverlay.style.display = 'block';
        } else {
            spotlightOverlay.style.display = 'none';
        }

        // You can add additional logic or styles here based on the state
        if (isSpotlightActive) {
            spotlightDiv.classList.add('spotlight-active');
        } else {
            spotlightDiv.classList.remove('spotlight-active');
        }
    }

    spotlightDiv.addEventListener('mousemove', updateSpotlightPosition);

    toggleButton.addEventListener('click', function () {
        isSpotlightActive = !isSpotlightActive;
        toggleSpotlightEffects();
    });

    // Listen to window resize events to toggle the spotlight effect based on screen width
    window.addEventListener('resize', function () {
        isSpotlightActive = window.innerWidth > 768; // Change the threshold as needed
        toggleSpotlightEffects();
    });

    // Initial setup
    toggleSpotlightEffects();
});
