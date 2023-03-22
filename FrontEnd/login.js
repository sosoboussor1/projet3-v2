
// gestion du bouton connecter
document.querySelector(".form-login").addEventListener("submit", async function (e) {
    e.preventDefault();
    // on récupère dans des variable le mail et le pswd
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // on fait une requête http POST vers l'API pour récupérer ou non le token
    // on constitue la charge utile de la requête
    const infos = {
        "email": email,
        "password": password
    };
    const chargeUtile = JSON.stringify(infos);
    // on fait la requête
    const reponse = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
    });
    if (reponse.status === 200) {
        // on récupère le token et l'id
        const reponseJson = await reponse.json();
        const idUser = reponseJson.userId;
        const token = reponseJson.token;
        // on les stock dans le local storage
        window.localStorage.setItem(idUser, token);
        document.location.href = "./index.html"
    } else {
        afficherMessageErreur();
    }
});

// function permettant d'afficher le message d'erreur
function afficherMessageErreur() {
    document.querySelector(".red-error").style.display = "block";
}