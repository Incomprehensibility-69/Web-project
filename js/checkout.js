window.onload = function() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const list = document.getElementById('checkout-items');
  const totalDisplay = document.getElementById('checkout-total');
  const cartDataInput = document.getElementById('cartData');

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
    list.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = total.toFixed(2);
  cartDataInput.value = JSON.stringify(cart);
};