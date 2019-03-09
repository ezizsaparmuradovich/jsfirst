'use strict';


		// let arr = [13, 2, 3, 40, 34];


		// for(let i=0; i<arr.length; i++){
		// 	console.log(arr[i]);
		// }

		// function asa(item, i, mas) {
		// 	console.log(i + ": " + item + " (massiw: " + mas + ")");
		// }
		// arr.forEach(asa);


		// arr.forEach(function(item, i, mas){
		// 	console.log(mas);
		// });

		// for(let key in arr){
		// 	console.log(key );
		// }

		// for(let key of arr){
		// 	console.log(key );
		// }

		// let a = prompt("", ""),
		// 	arr = ["aman", "priwet", "kak", "ty"];
		// arr.joined("/");
		// console.log(arr);

		// let ans = prompt("", ""),
		// 	i,
		// 	arr = [];
		// 	arr = ans.split("/")
		// 	i = arr.join("/");
		// console.log(i);

		// let arr = ["aman", "priwet", "kak", "aty"];
		// let i;
		// i=arr.sort();
		// console.log(arr);

		let arr = [1, 2, 15, 4];
		arr.sort(function(a, b){
			return a-b;
		});
		console.log(arr);