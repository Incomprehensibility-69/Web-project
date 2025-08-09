function filterGames() {
  const query = document.getElementById('search').value.toLowerCase();
  const cards = document.querySelectorAll('.game-card');
  cards.forEach(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
}
