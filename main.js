import Alpine from 'alpinejs';
import spotlightModule from './spotlight';
import toggleContent from './obrirPreus';

// Configuració inicial d'Alpine
window.Alpine = Alpine;
Alpine.start();



// Funció per alternar la visibilitat d'una secció de preguntes freqüents
function toggleFAQ(faqId) {
    var element = document.getElementById(faqId);
    element.classList.toggle("hidden");
}

// Espera fins que el document estigui completament carregat abans de realitzar accions
document.addEventListener('DOMContentLoaded', function () {
    // Referència al botó de toogle del spotlight
    const toggleButton = document.getElementById('toggleButton');

    // Afegir un esdeveniment de clic al botó per alternar l'estat del spotlight
    toggleButton.addEventListener('click', function () {
        spotlightModule.toggleSpotlight();
    });

    // Escoltar esdeveniments de redimensionament de la finestra per gestionar el spotlight
    window.addEventListener('resize', function () {
        spotlightModule.handleResize();
    });

    // Configuració inicial del spotlight
    spotlightModule.initialize();
});

