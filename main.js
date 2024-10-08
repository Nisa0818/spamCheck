document.getElementById('personalInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('Voornaam en Achternaam').value;
    const email = document.getElementById('E-mail').value;
    const phone = document.getElementById('Telefoonnummer').value;
    const Iban = document.getElementById('Iban').value;
    const Wachtwoord = document.getElementById('Wachtwoord').value;

    document.getElementById('output').innerHTML = `
        <strong>Voornaam en Achternaam:</strong> ${name}<br>
        <strong>E-mail:</strong> ${email}<br>
        <strong>Telefoonnummer:</strong> ${phone}<br>
        <strong>Iban:</strong> ${Iban}<br>
        <strong>Wachtwoord:</strong> ${Wachtwoord}
    `;
});


function handleSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();
    // Redirect to another HTML page
    window.location.href = "dashboard.html"; // Change to your desired URL
}
 