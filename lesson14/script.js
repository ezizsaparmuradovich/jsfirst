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