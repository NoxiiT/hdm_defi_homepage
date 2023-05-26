/* On attend que le DOM soit chargé */
document.addEventListener("DOMContentLoaded", function () {
    // Si un élément carousel-item est active, on l'affiche, et on cache les autres
    if (document.querySelector(".carousel-item.active")) {
        document.querySelector(".carousel-item.active").style.display = "block";
        document.querySelectorAll(".carousel-item:not(.active)").forEach(function (element) {
            element.style.display = "none";
        });
    }

    // Toutes les 10 secondes, on change l'élément actif du carousel
    setInterval(function () {
        // On récupère l'élément actif
        let activeElement = document.querySelector(".carousel-item.active");
        // On récupère l'élément suivant, ou le premier si l'élément actif est le dernier (l'élément doit posséder la classe carousel-item, il est possible que le prochain élément est un élément <a> et non <div>)
        let nextElement = activeElement.nextElementSibling || document.querySelector(".carousel-item");
        // On remplace l'élément actif par l'élément suivant
        activeElement.classList.remove("active");
        nextElement.classList.add("active");
        // On affiche l'élément actif, et on cache les autres
        document.querySelector(".carousel-item.active").style.display = "block";
        document.querySelectorAll(".carousel-item:not(.active)").forEach(function (element) {
            element.style.display = "none";
        });
    }, 10000);

    // Lorsque carousel-control-prev est cliqué, on affiche l'élément précédent
    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        // On récupère l'élément actif
        let activeElement = document.querySelector(".carousel-item.active");
        // On récupère l'élément précédent, ou le dernier si l'élément actif est le premier (l'élément doit posséder la classe carousel-item, il est possible que le prochain élément est un élément <a> et non <div>)
        let previousElement = activeElement.previousElementSibling || document.querySelector(".carousel-item:last-child");
        // On remplace l'élément actif par l'élément précédent
        activeElement.classList.remove("active");
        previousElement.classList.add("active");
        // On affiche l'élément actif, et on cache les autres
        document.querySelector(".carousel-item.active").style.display = "block";
        document.querySelectorAll(".carousel-item:not(.active)").forEach(function (element) {
            element.style.display = "none";
        });
    });

    // Lorsque carousel-control-next est cliqué, on affiche l'élément suivant
    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        // On récupère l'élément actif
        let activeElement = document.querySelector(".carousel-item.active");
        // On récupère l'élément suivant, ou le premier si l'élément actif est le dernier (l'élément doit posséder la classe carousel-item, il est possible que le prochain élément est un élément <a> et non <div>)
        let nextElement = activeElement.nextElementSibling || document.querySelector(".carousel-item");
        // On remplace l'élément actif par l'élément suivant
        activeElement.classList.remove("active");
        nextElement.classList.add("active");
        // On affiche l'élément actif, et on cache les autres
        document.querySelector(".carousel-item.active").style.display = "block";
        document.querySelectorAll(".carousel-item:not(.active)").forEach(function (element) {
            element.style.display = "none";
        });
    });

    // Le background de la navbar devient transparent lorsque l'utilisateur se trouve en haut de page
    window.addEventListener("scroll", function () {
        if (window.scrollY === 0) {
            document.querySelector("nav").classList.remove("bg-dark");
            document.querySelector("nav").classList.add("bg-transparent");
        } else {
            document.querySelector("nav").classList.remove("bg-transparent");
            document.querySelector("nav").classList.add("bg-dark");
        }
    });

    // Lorsque la page est chargée, on cache les div "info-etudiant" et "info-entreprise"
    document.querySelector(".info-etudiant").style.display = "none";
    document.querySelector(".info-entreprise").style.display = "none";

    // Si le bouton "btn-etudiant" est cliqué, on affiche alors "info-etudiant" qui est une div cachée
    document.querySelector(".btn-etudiant").addEventListener("click", function () {
        document.querySelector(".info-etudiant").style.display = "block";
        document.querySelector(".info-entreprise").style.display = "none";
    });

    // Si le bouton "btn-entreprise" est cliqué, on affiche alors "info-entreprise" qui est une div cachée
    document.querySelector(".btn-entreprise").addEventListener("click", function () {
        document.querySelector(".info-entreprise").style.display = "block";
        document.querySelector(".info-etudiant").style.display = "none";
    });
});
