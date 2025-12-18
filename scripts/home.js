// script.js

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const delta = 120; // La hauteur de "sécurité" avant de cacher

window.addEventListener('scroll', function() {
    // Récupérer la position actuelle
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Protection contre le scroll négatif (rebond sur mobile)
    if (scrollTop < 0) scrollTop = 0;

    // LOGIQUE PRINCIPALE
    if (scrollTop > lastScrollTop && scrollTop > delta) {
        // CONDITION 1 : On scrolle vers le BAS
        // CONDITION 2 : On a dépassé les 150px (delta) du haut de page
        
        navbar.classList.add('navbar-hidden');
        
    } else if (scrollTop < lastScrollTop) {
        // Si on scrolle vers le HAUT, on réaffiche toujours
        navbar.classList.remove('navbar-hidden');
    }

    // Mise à jour de la position pour le prochain mouvement
    lastScrollTop = scrollTop;
});