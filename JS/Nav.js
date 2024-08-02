document.addEventListener('DOMContentLoaded', function() {
    fetch('/Retro/Nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Nav').innerHTML = data;
        });
    fetch('/Retro/Footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Footer').innerHTML = data;
        });
    });
    