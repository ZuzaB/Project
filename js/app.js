'use strict';
document.addEventListener("DOMContentLoaded", function(e) {
  var next = document.querySelector('.wrap__arrow--right'),
      prev = document.querySelector('.wrap__arrow--left'),
      slidesContainer = document.querySelector('.slides'),
      left = slidesContainer.style.left,
      width = document.querySelector('.article').offsetWidth,
      articles = document.querySelectorAll('.article'),
      artikelsNumber = articles.length,
      counter = 1;

window.addEventListener('resize', function(){
  width = document.querySelector('.article').offsetWidth;
});

function nextArticle (elem) {
  if (counter < artikelsNumber) {
    elem.style.left = '-' + counter * width +'px';
    counter ++;
  } else if(counter = artikelsNumber) {
    elem.style.left = '0px';
    counter = 1;
  }
}

function prevArticle(elem) {
  if (counter > 1) {
    counter = counter - 2;
    elem.style.left = '-' + counter * width +'px';
    counter++;
  } else if(counter = 1) {
    counter = artikelsNumber - 1;
    elem.style.left = '-' + counter * width +'px';
    counter++;
  }
}

  next.addEventListener('click', function(e){
      nextArticle(slidesContainer);
  });

  prev.addEventListener('click', function(e){
      prevArticle(slidesContainer);
  });
});
