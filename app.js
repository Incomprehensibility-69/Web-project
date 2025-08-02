// Featured slider data and navigation
const featuredGames = [
  {
    img: 'img/TOK slider.jpg',
    title: 'Legend of Zelda: Tears of the Kingdom',
    screenshots: [
      'img/OOT slider.jpg',
      'img/BOTW slider.jpg',
      'img/Marjora Mask Slider.jpg'
    ],
    tags: ['Adventure', 'Open World', 'Fantasy', 'Single Player'],
    recommend: ['Adventure', 'Open World'],
    price: '$69.99'
  },
  {
    img: 'img/Sekiro.jpg',
    title: 'Sekiro Shadows Die Twice',
    screenshots: [
      'img/TOK slider.jpg',
      'img/OOT slider.jpg',
      'img/BOTW slider.jpg'
    ],
    tags: ['Souls-like', 'Stealth', 'Third Person', 'Single Player'],
    recommend: ['Souls-like', 'Stealth'],
    price: '$59.99'
  },
  {
    img: 'img/MarioKartWorld Slider.jpg',
    title: 'Mario Kart World',
    screenshots: [
      'img/TOK slider.jpg',
      'img/OOT slider.jpg',
      'img/BOTW slider.jpg'
    ],
    tags: ['Racing', 'Multiplayer', 'Family', 'Party'],
    recommend: ['Racing', 'Multiplayer'],
    price: '$79.99'
  }
];

let featuredIndex = 0;

function updateFeaturedSlider() {
  const game = featuredGames[featuredIndex];
  document.getElementById('featured-main-img').src = game.img;
  document.getElementById('featured-main-img').alt = game.title;
  document.getElementById('featured-title').textContent = game.title;
  // Screenshots
  const screenshotsDiv = document.getElementById('featured-screenshots');
  screenshotsDiv.innerHTML = '';
  game.screenshots.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'featured-thumb';
    screenshotsDiv.appendChild(img);
  });
  // Tags
  const tagsDiv = document.getElementById('featured-tags');
  tagsDiv.innerHTML = '';
  game.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = tag;
    tagsDiv.appendChild(span);
  });
  // Recommend
  const recommendDiv = document.getElementById('featured-recommend');
  recommendDiv.innerHTML = '<span class="recommend-label">Recommended</span> because you played games tagged with ';
  game.recommend.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = tag;
    recommendDiv.appendChild(span);
  });
  // Price
  document.getElementById('featured-price').textContent = game.price;
}

function prevFeatured() {
  featuredIndex = (featuredIndex - 1 + featuredGames.length) % featuredGames.length;
  updateFeaturedSlider();
}

function nextFeatured() {
  featuredIndex = (featuredIndex + 1) % featuredGames.length;
  updateFeaturedSlider();
}

// Initialize featured slider
updateFeaturedSlider();

const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
let current = 0;

function showSlide(index) {
    // Move the slides container horizontally
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

// Show the first slide initially
showSlide(current);

// Change slide every 4 seconds
setInterval(nextSlide, 4 * 1000); // 4 seconds in milliseconds

function toggleZeldaVersions() {
    const versions = document.getElementById('zelda-versions');
    versions.style.display = versions.style.display === 'none' ? 'block' : 'none';
}

function toggleCodVersions() {
    const versions = document.getElementById('cod-versions');
    versions.style.display = versions.style.display === 'none' ? 'block' : 'none';
}