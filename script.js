const products = [
    { id: 1, name: "Laptop", price: 799 },
    { id: 2, name: "Phone", price: 599 },
    { id: 3, name: "Headphones", price: 99 },
  ];
  
  const cart = [];
  
  const productList = document.getElementById('product-list');
  const cartContainer = document.getElementById('cart');
  
  // Display products
  products.forEach(product => {
    const productEl = document.createElement('div');
    productEl.className = 'product';
    productEl.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productEl);
  });
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
    
    // Optional: Delay feedback using timing function
    setTimeout(() => {
      alert(`${product.name} added to cart!`);
    }, 300); // 300ms delay
  }
  
  function updateCart() {
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>No items in cart.</p>';
      return;
    }
  
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        ${item.name} - $${item.price}
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartContainer.appendChild(cartItem);
    });
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  