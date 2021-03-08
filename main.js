$(document).ready(function() {
 $(".next").click(function() {
   nextImage();

 });

 $(".prev").click(function() {
   prevImage();
 });
});

function nextImage() {
  var activeImage = $("img.active");
  var activeCircle = $(".nav i.active");

  activeImage.removeClass("active");
  activeCircle.removeClass("active");
  
  if(activeImage.hasClass("last")) {
    $("img.first").addClass("active");
    $("i.first").addClass("active");
  }
  else {
    activeImage.next("img").addClass("active");
    activeCircle.next("i").addClass("active");

  }

}

function prevImage() {
  var activeImage = $("img.active");
  var activeCircle = $(".nav i.active");


  activeImage.removeClass("active");
  activeCircle.removeClass("active");


  if(activeImage.hasClass("first")) {
    $("img.last").addClass("active");
    $("i.last").addClass("active");
  }
  else {
    activeImage.prev("img").addClass("active");
    activeCircle.prev("i").addClass("active");
  }
  
}
 