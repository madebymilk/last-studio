/*jshint esversion: 6 */

// Lightbox functionality
// the first step we want to do is to show our lightbox when we click on an image
// we want to make sure that the image we clicked on will be in the lightbox
// we want to make sure that when we click on the lightbox when its visible that it will fade out and hide itself again

const images = document.querySelectorAll("section img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");

console.log(images);

images.forEach(image => {

  image.addEventListener("click", function() {

    lightbox.classList.add("fadeIn");
    let imageSrc = this.getAttribute("src");
    lightboxImage.setAttribute("src", imageSrc);

  });

});

lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadeIn");
});

// We first need to listen for the scroll event on the page
// Next, when our browser reaches a certain distance form the top of the page we need to change the body elements background color

const body = document.querySelector("body");

// Listen out for scroll events on our page
document.addEventListener("scroll", function() {
  //console.log("Page scrolled");

  // Find out and store how far from the top of the page the scrollbar is
  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  // If distanceFromTop is greater than 1000 pixels, do something
  if (distanceFromTop > 1000) {
    console.log("past 1000 pixels");
    body.classList.add("brogue-active");
  } else {
    // Otherwise do something else
    console.log("less than 1000 pixels down");
    body.classList.remove("brogue-active");
  }

  if (distanceFromTop > 4400) {
    body.classList.add("stationary-active");
  } else {
    body.classList.remove("stationary-active");
  }

});