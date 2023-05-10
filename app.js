let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Fetch the JSON file
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    // Loop through the products and create HTML elements
    data.products.forEach(product => {
      const productContainer = document.createElement('div');
      const productImage = document.createElement('img');
      const productTitle = document.createElement('h2');
      const productDescription = document.createElement('p');
      const productPrice = document.createElement('span');
      
      // Set the content and attributes for each element
      productImage.src = product.image;
      productTitle.textContent = product.title;
      productDescription.textContent = product.description;
      productPrice.textContent = `$${product.price.toFixed(2)}`;
      
      // Append the elements to the container
      productContainer.appendChild(productImage);
      productContainer.appendChild(productTitle);
      productContainer.appendChild(productDescription);
      productContainer.appendChild(productPrice);
      
      // Append the container to the page
      document.getElementById('product-list').appendChild(productContainer);
    });
  })
  .catch(error => console.error(error));