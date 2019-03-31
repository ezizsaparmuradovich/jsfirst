'use strict';

/*let obj1 = {
	health: 400,
	room: 100
};

let obj2 = {
	health: 300
};

obj2.__proto__ = obj1;

console.log(obj2.constructor);
console.log(obj2.room);*/

let box 	 = document.getElementById('box'),
	btn 	 = document.getElementsByTagName('button'),
	circle	 = document.getElementsByClassName('circle'),
	heart 	 = document.querySelectorAll('.heart'),
	oneHeart = document.querySelector('.heart'),
	asa      = document.querySelector('#asa'),
	wrapper  = document.querySelector('.wrapper');

box.style.backgroundColor = "#4b4";
box.style.border = "2px solid red";

btn[1].style.borderRadius = "50%";
btn[3].style.backgroundColor = "red";

circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

/*for (let i = 0; i < heart.length; i++) {
	heart[i].style.width = "300px";
	heart[i].style.height = "100px";
	heart[i].style.backgroundColor = "pink";
}*/

/*heart.forEach(function(item, i, hearts) {
	item.style.backgroundColor = "green";
});*/

let div = document.createElement("div");
	//text = document.createTextNode("I was here!");

div.classList.add("black");

//document.body.appendChild(div);

//// wrapper.appendChild(div);
//div.innerHTML = "<h1>Hello</h1>";
div.textContent = "Hello World!";
document.body.insertBefore(div, btn[0]);

document.body.removeChild(circle[0]);
document.body.removeChild(btn[1]);
//wrapper.removeChild(heart[2]);

document.body.replaceChild(circle[1], box);
console.log(div);