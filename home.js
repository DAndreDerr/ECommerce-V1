// here we create the index variable that keeps track of which image is being displayed
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

//The function below displays the appropriate image and updates the dots
// the n parameter is the placeholder for the index of what slide is being displayed

function showSlides(n) {
  // here we define the index for the for loops
  let i;
  // here we get the grab all the elements with the classes "mySlides" and "dot"
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // the first two ifs check if n is greater than the number of slides
  // If so it sets the "slideIndex" to 1, and if n is less than 1 it sets
  // the "slideIndex to the last slide"
  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  // This for loop, loops through the slides and sets the display to "none"
  // This hides the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // this loop goes through and removes the active class to the dots depending on current slide
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // this section sets whatever the current slide is to block display
  slides[slideIndex-1].style.display = "block";
  // this section adds the active class to the dot that relates to current slide
  dots[slideIndex-1].className += " active";
}
