'use strict';
document.addEventListener("DOMContentLoaded", function(e) {
  var next = document.querySelector('.wrap__arrow--right'),
      prev = document.querySelector('.wrap__arrow--left'),
      slidesContainer = document.querySelector('.slides'),
      articles = document.querySelectorAll('.article'),
      artikelsNumber = articles.length,
      counter = 1;

  next.addEventListener('click', function(e){
    var width = document.querySelector('.article').offsetWidth;
    slidesContainer.style.left = '-' + (counter * width) +'px';
    counter++;
    if (counter >= artikelsNumber) {
      slidesContainer.style.left = '0';
      counter = 1;
    }
  });

  prev.addEventListener('click', function(e){

  });


});
