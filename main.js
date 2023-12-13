import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

// function toggleFAQ(faqId) {
//     var element = document.getElementById(faqId);
//     element.classList.toggle("hidden");
// }



document.addEventListener('DOMContentLoaded', function () {
    const spotlightDiv = document.getElementById('mySpotlightDiv');

    spotlightDiv.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.style.setProperty('--cursor-x', `${x}px`);
        this.style.setProperty('--cursor-y', `${y}px`);
    });
});

