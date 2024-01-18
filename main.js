import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

// function toggleFAQ(faqId) {
//     var element = document.getElementById(faqId);
//     element.classList.toggle("hidden");
// }



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

function toggleFAQ(faqId) {
    var element = document.getElementById(faqId);
    element.classList.toggle("hidden");
}


let currentOpenContentId = null;

function toggleContent(elementId) {
    const content = document.getElementById(elementId);

    if (currentOpenContentId && currentOpenContentId !== elementId) {
        const currentOpenContent = document.getElementById(currentOpenContentId);
        currentOpenContent.classList.add('hidden');
    }

    content.classList.toggle('hidden');
    currentOpenContentId = content.classList.contains('hidden') ? null : elementId;
}