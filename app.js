fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.getElementById('products-container');
    const products = data.products;
    
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      
      const imageElement = document.createElement('img');
      imageElement.src = product.image;
      productElement.appendChild(imageElement);
      
      const titleElement = document.createElement('h2');
      titleElement.textContent = product.title;
      productElement.appendChild(titleElement);
      
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = product.description;
      productElement.appendChild(descriptionElement);
      
      const priceElement = document.createElement('p');
      priceElement.textContent = `$${product.price}`;
      productElement.appendChild(priceElement);
      
      productsContainer.appendChild(productElement);
    });
  })
  .catch(error => console.error(error));

