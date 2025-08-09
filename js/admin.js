function updateStock(cell, gameId) {
  const newStock = cell.textContent;
  fetch('update_stock.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ gameId, newStock })
  })
  .then(res => res.text())
  .then(data => alert(data));
}
/* The following code should be inside a function or event handler.
   Example: wrap it in a function called updateFeaturedGame(game) */

function updateFeaturedGame(game) {
  // Tags
  const tagsDiv = document.getElementById('featured-tags');
  tagsDiv.innerHTML = '';
  game.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = tag;
    tagsDiv.appendChild(span);
  });
  // Recommendations
  const recommendDiv = document.getElementById('featured-recommend');
  recommendDiv.innerHTML = '';
  game.recommend.forEach(rec => {
    const span = document.createElement('span');
    span.className = 'recommend';
    span.textContent = rec;
    recommendDiv.appendChild(span);
  });
  // Price
  document.getElementById('featured-price').textContent = game.price;
}