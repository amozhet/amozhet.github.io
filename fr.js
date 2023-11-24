// let btn = document.getElementById("btnCart")
// btn.addEventListener("click", playSound);
// btn.addEventListener("click", saySmth);

// function playSound() {
//   var x = new Audio("short success sound.mp3");
//   x.play();
// }
// function saySmth() {
//   alert("Added to cart! (I hope...)")
// };

// function fu1() {
//   document.getElementById("btnCart").style.background = "rgb(216,220,188)";
// };
// function fu2() {
//   document.getElementById("btnCart").style.background = "";
// };

// For all "Add to cart! buttons"
$(document).ready(function () {

  $(".btnCart").click(function () {
    var x = new Audio("short success sound.mp3");
    x.play();
    alert("Added to cart! (I hope...)")

  })
  $(".btnCart").mouseover(function () {
    $(this).css("background-color", "rgb(216,220,188)");
  });
  $(".btnCart").mouseout(function () {
    $(this).css("background-color", "");
  });

  // Accordion on Colognes page
  $(".acc-head").click(function () {
    $(this).next(".acc-body").slideToggle(500);
    $(this).toggleClass("active");
  });
 
  // Changing img on Product page
  $('.myProductsImg2').click(function (e) {
    e.preventDefault(); // Prevent the default behavior
    $(".myimg").attr('src', 'Fragrance Brend/IMG_1064.1.PNG');
});

$('.myProductsImg1').click(function (e) {
    e.preventDefault(); // Prevent the default behavior
    $(".myimg").attr('src', 'Fragrance Brend/IMG_1064.PNG');
});

$(".btnCartProduct").click(function () {
  var x = new Audio("short success sound.mp3");
  x.play();
  alert("Added to cart! (I hope...)")

})

  

  








});





// Slides on ByScents page
let slideIndex = [1, 1, 1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);



function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}




