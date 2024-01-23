// Mòdul Spotlight
const spotlightModule = (function () {
    // Referències als elements de spotlight
    const spotlightDiv = document.getElementById('mySpotlightDiv');
    const spotlightOverlay = document.getElementById('spotlightOverlay');

    // Estat del spotlight (actiu o inactiu)
    let isSpotlightActive = window.innerWidth > 768; // Canvieu el llindar segons sigui necessari

    // Funció per actualitzar la posició del spotlight segons el moviment del ratolí
    function updateSpotlightPosition(e) {
        if (isSpotlightActive) {
            const rect = spotlightDiv.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            spotlightDiv.style.setProperty('--cursor-x', `${x}px`);
            spotlightDiv.style.setProperty('--cursor-y', `${y}px`);
        }
    }

    // Funció per gestionar l'efecte del spotlight
    function toggleSpotlightEffects() {
        // Alternar entre mostrar i ocultar l'efecte del spotlight i l'efecte d'ombratge
        spotlightOverlay.style.display = isSpotlightActive ? 'block' : 'none';

        // Podeu afegir lògica o estils addicionals aquí segons l'estat
        isSpotlightActive
            ? spotlightDiv.classList.add('spotlight-active')
            : spotlightDiv.classList.remove('spotlight-active');
    }

    // Afegir un esdeveniment de moviment de ratolí per actualitzar la posició del spotlight
    spotlightDiv.addEventListener('mousemove', updateSpotlightPosition);

    // Funcions exposades del mòdul
    return {
        toggleSpotlight: function () {
            // Alternar l'estat del spotlight i gestionar els seus efectes
            isSpotlightActive = !isSpotlightActive;
            toggleSpotlightEffects();
        },
        handleResize: function () {
            // Gestionar el spotlight quan es redimensiona la finestra
            isSpotlightActive = window.innerWidth > 768; // Canvieu el llindar segons sigui necessari
            toggleSpotlightEffects();
        },
        initialize: function () {
            // Configuració inicial del spotlight
            toggleSpotlightEffects();
        },
    };
})();

export default spotlightModule;