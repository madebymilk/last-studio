// We first need to listen for the scroll event on the page
// Next, when our browser reaches a certain distance form the top of the page we need to change the body elements background color

$(document).on("scroll", function() {
  // console.log("Page Scrolled")

  var d = $(document).scrollTop();
  console.log(d);

  if(d > 1000) {
    console.log("past 1000 pixels");
    $('body').addClass('brogue-active');
  }
  else {
    console.log("less than 1000 pixels down");
    $('body').removeClass('brogue-active');
  }

  $('body').toggleClass('stationary-active', d > 4400);
});

// Lightbox functionality
// the first step we want to do is to show our lightbox when we click on an image
// we want to make sure that the image we clicked on will be in the lightbox
// we want to make sure that when we click on the lightbox when its visible that it will fade out and hide itself again

$('.brogues img, .stationary img').on('click', function() {
  $('.lightbox').fadeIn();

  var imageSrc = $(this).attr('src');
  $('.lightbox img').attr('src', imageSrc);
});

$('.lightbox').on('click', function() {
  $('.lightbox').fadeOut();
});
