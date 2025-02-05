function loadServicesCards() {
    fetch('section-card.html')
        .then(response => response.text())
        .then(data => {
            console.log(data); // Log the entire content of the fetched file
            document.getElementById('services-cards').innerHTML = data;
        })
        .catch(error => console.error('Error loading the cards:', error));
}


function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
window.onload = loadServicesCards;
