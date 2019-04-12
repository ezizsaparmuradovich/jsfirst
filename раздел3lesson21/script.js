'use strict';

window.addEventListener('DOMContentLoaded', function () {

	/*let timeId = setTimeout(aler5sec, 2000);
	function aler5sec () {
		alert("Прошла 5 minute!");
	}
	clearTimeout(timeId);*/


	/*let timeId = setInterval(aler5sec, 2000);
	function aler5sec () {
		console.log("Прошла 2 second!");
	}
	clearTimeout(timeId);*/


	/*let timeId = setTimeout(function col1() {
		console.log('Say hi! Mr!');
		setTimeout(col1, 1000);
	});
	clearTimeout(timeId);*/


	let btnAnimate = document.querySelector('.animate'),
		box = document.querySelector('#box');

	function myAnimation () {
		let positn = 0;
		let idTimer = setInterval(frames, 10);
		function frames () {
			if(positn == 450){
				clearInterval(idTimer);
			} else {
				positn = positn + 1;
				box.style.marginTop = positn + 'px';
				box.style.marginLeft = positn + 'px';
			}
		}
	}

	btnAnimate.addEventListener('click', myAnimation);


	let wrapperBtns = document.querySelector('.box'),
		childBtns = document.querySelectorAll('button');

	//event.target.tagName == 'BUTTON'
	//event.target.classList.contains('ddd')
	//event.target.matches('button.ddd')
	
	wrapperBtns.addEventListener('click', function (event) {
		if(event.target && event.target.matches('button.ddd')){
			alert("btnq");
		}
	});























	// Get the element, add a click listener...
	let a = document.getElementById("parent-list"); 
	a.addEventListener("click", function(e) {
		if(e.target && e.target.nodeName == "LI") {
			console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
		}
	});


	var tree = document.getElementsByTagName('ul')[0];

	tree.onclick = function(event) {
	  var target = event.target;

	  if (target.tagName != 'SPAN') {
	    return; // клик был не на заголовке
	  }

	  var li = target.parentNode; // получить родительский LI

	  // получить UL с потомками -- это первый UL внутри LI
	  var childrenContainer = li.getElementsByTagName('ul')[0];

	  if (!childrenContainer) return; // потомков нет -- ничего не надо делать

	  // спрятать/показать (можно и через CSS-класс)
	  childrenContainer.hidden = !childrenContainer.hidden;
	}
});