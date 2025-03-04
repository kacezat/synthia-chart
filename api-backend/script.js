document.getElementById('urlForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const url = document.getElementById('url').value;
    
    // Remplacez l'URL par celle de votre conteneur backend
    fetch('http://backend-domain/api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        // Affiche le document généré dans la page
        document.getElementById('result').innerHTML = data.document;
    })
    .catch(err => console.error(err));
});

