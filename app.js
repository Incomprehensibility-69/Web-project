const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

// Show the first slide initially
showSlide(current);

// Change slide every 4 seconds
setInterval(nextSlide, 4000);

function toggleZeldaVersions() {
    const versions = document.getElementById('zelda-versions');
    versions.style.display = versions.style.display === 'none' ? 'block' : 'none';
}

function toggleCodVersions() {
    const versions = document.getElementById('cod-versions');
    versions.style.display = versions.style.display === 'none' ? 'block' : 'none';
}