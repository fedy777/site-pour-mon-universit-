// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêcher l'envoi du formulaire pour démonstration

    // Récupération des valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Affichage des informations dans la console pour démonstration
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Réinitialisation du formulaire
    document.getElementById('contactForm').reset();
    alert('Votre message a bien été envoyé!');
});
