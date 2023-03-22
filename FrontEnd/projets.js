//fonction permettant de récupérer les projets depuis la bdd
export async function getProjets() {
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();
    return projets;
}

//fonction permettant de générer les projets
export function genereProjets(projets) {
    // Boucle qui parcourt les projets
    for (let i = 0; i < projets.length; i++) {
        // on crée un élément figure qui contiendra une image + une figcaption
        const figureProjet = document.createElement("figure");
        // on crée un élément image
        const imageProjet = document.createElement("img");
        imageProjet.src = projets[i].imageUrl;
        // on crée l'élément figcaption
        const figcaptionProjet = document.createElement("figcaption");
        figcaptionProjet.innerText = projets[i].title;

        // on ajoute chaque l'image et le titre à l'élément figure
        figureProjet.appendChild(imageProjet);
        figureProjet.appendChild(figcaptionProjet);

        // on sélectionne la balise gallery puis puis on y ajoute l'élément figure
        const gallery = document.querySelector(".gallery");
        gallery.appendChild(figureProjet);
    }
}

// Generation des projet
const projets = await getProjets();
document.querySelector(".gallery").innerHTML = "";
genereProjets(projets);

// GESTION DES BOUTONS FILTRE
// Tous
document.querySelector(".f-1").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".gallery").innerHTML = "";
    genereProjets(projets);
});
// Objets
document.querySelector(".f-2").addEventListener("click", function(e) {
    e.preventDefault();
    const projetsFiltres = projets.filter(projet => projet.categoryId === 1);
    document.querySelector(".gallery").innerHTML = "";
    genereProjets(projetsFiltres);
});
// Appartements
document.querySelector(".f-3").addEventListener("click", function(e) {
    e.preventDefault();
    const projetsFiltres = projets.filter(projet => projet.categoryId === 2);
    document.querySelector(".gallery").innerHTML = "";
    genereProjets(projetsFiltres);
});
// Hôtels et Restaurants
document.querySelector(".f-4").addEventListener("click", function(e) {
    e.preventDefault();
    const projetsFiltres = projets.filter(projet => projet.categoryId === 3);
    document.querySelector(".gallery").innerHTML = "";
    genereProjets(projetsFiltres);
});
