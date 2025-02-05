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



    function forceClearCache() {
        const timestamp = new Date().getTime();

        // Update all CSS files
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
            link.href = link.href.split('?')[0] + '?v=' + timestamp;
        });

        // Update all JavaScript files
        document.querySelectorAll('script').forEach(script => {
            if (script.src) {
                script.src = script.src.split('?')[0] + '?v=' + timestamp;
            }
        });

        // Update all images
        document.querySelectorAll('img').forEach(img => {
            img.src = img.src.split('?')[0] + '?v=' + timestamp;
        });
    }

    window.onload = forceClearCache;

