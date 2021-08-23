'use strict';
 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

let Images = ['german poppy.jpg', 'german.jpg', 'Golda-Puppy.jpg', 'haski.jpg', 'Pomeranian-puppies.jpg', 'rot baby.jpg', 'rottweiler-puppy.jpg'];



var cart = new Cart([]);
function populateForm() {

  const selectElement = document.getElementById('pets');
  for (let i in Pet.allPet) {
    let El = document.createElement("option");

    let option = Pet.allPet[i].name;
    El.textContent = option;
    El.value = option;
    selectElement.appendChild(El);
  }

}

function handleSubmit(event) {

  event.preventDefault();
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

function addSelectedItemToCart() {

  let pets = document.getElementById('pets').value;

  let quantity = document.getElementById('quantity').value;
 
  cart.addItem(pets, quantity)
}
