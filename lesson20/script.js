'use strict';

window.addEventListener('DOMContentLoaded', function () {
	let box = document.querySelector('#box');

	/*box.addEventListener('touchstart', function (event) {
		event.preventDefault();
		console.log("Touchstart!");
		//console.log(event.target);
		console.log(event.touches[0].target);
		console.log(event.changedTouches);
		console.log(event.targetTouches);
	});*/

	box.addEventListener('touchmove', function (event) {
		event.preventDefault();
		console.log("Touchmove! " , event.touches[0].pageX);
	});

	/*box.addEventListener('touchend', function (event) {
		event.preventDefault();
		console.log("Touchend!");
	});*/




	//регулярные вражения
	
	//flags
	//i
	//g
	//m
	//\d  \D
	//\w  \W
	//\s  \S

	// new RegExp('pattern', 'flags');
	// /pattern/flags
	
	/*let ans = prompt("Enter your name, please! ", "");
	let pat = /n/i;
	let cx = ans.search(pat);
	console.log(cx);*/

	/*let ans = prompt("Enter your name, please! ", "");
	let pat = /n/ig;
	let cx = ans.match(pat);
	console.log(cx);*/

	/*//let ans = prompt("Enter your password, please! ", "");
	// let pat = /./ig;
	// let cx = ans.replace(pat, '*');
	// alert("Your password is " + cx);
	alert("08-04-2019".replace(/-/g, "."));*/

	/*let ans = prompt("Enter your name, please! ", "");
	let pat = /n/i;
	let cx = pat.test(ans);
	console.log(cx);*/

	/*let ans = prompt("Enter your digits, please! ", "");
	let pat = /\d/g;
	let cx = ans.match(pat);
	console.log(cx);*/

	/*let ans = "My name* is E2w3Z4 and* S1w3Z5";
	console.log(ans.match(/\w\d\w\d\w\d/gi));
	console.log(ans.match(/-/gi));
	console.log(ans.match(/ /gi));*/

});