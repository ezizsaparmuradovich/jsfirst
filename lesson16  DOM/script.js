'use strict';

let obj1 = {
	health: 400,
	room: 100
};

let obj2 = {
	health: 300
};

obj2.__proto__ = obj1;

console.log(obj2.constructor);
console.log(obj2.room);

let box = document.getElementById('box'),
	btn = document.getElementsByTagName('button'),
	circle = document.getElementsByClassName('circle'),
	heart = document.querySelectorAll('#asa .heart');
console.log(circle[2]);
console.log(btn[0]);
console.log(heart);