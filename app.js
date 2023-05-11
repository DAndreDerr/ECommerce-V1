// The code below is making an HTTP request to the server to fetch my json file using the `fetch` function
fetch('products1.json')
// Once the server response is received we use the "response.json()" method to parse the data into JS file
// response is the event that starts the download of the data
// response.json means to finish "fetching" and then parse Json data
  .then(response => response.json()) 
  .then(data => {
    // below I created variables, inside those I use .document.getElementID() 
    // and inside of that I linked the container I have on my html using the ID 
    const productsContainer = document.getElementById('products-container');
    const products = data.products;
    // Next I use the .forEach method to run through each product in the JSON array
    products.forEach(product => {
    // For each product it creates a new the code below creates a div container with the "product" class 
      const productElement = document.createElement('div');
      productElement.classList.add('product');
    //  Below is the code that creates the img, h2, p(description), and p(price)
    // after it creates the elements it appends them to the product div
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
      
    //   once all the elements are in the div I append the div we just created to the original "product" container (this pushes it to html)
      productsContainer.appendChild(productElement);
    });
  })
//   below is code that will display error in the console if my code fails to fetch data from my JSON
  .catch(error => console.error(error));

fetch('products2.json')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.getElementById('products-container2');
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

fetch('products3.json')
  .then(response => response.json())
  .then(data => {
    const productsContainer = document.getElementById('products-container3');
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

