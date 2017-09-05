var headOne = document.querySelector('#one');
var headTwo = document.querySelector('#two');
var headThree = document.querySelector('#three');

headOne.addEventListener('mouseenter', function(){
  headOne.textContent = "Mouse is Over!";
	headOne.style.color = "red";
})

headOne.addEventListener('mouseleave', function(){
  headOne.textContent = "Hover Over me!!";
	headOne.style.color = "black";
})

headTwo.addEventListener('click', function(){
	headTwo.textContent = "I was clicked!";
  headTwo.style.color = "blue";
})

headThree.addEventListener('dblclick', function(){
  headThree.textContent = "I was double clicked!";
	headThree.style.color = "orange";
})


console.log("Connected!");
