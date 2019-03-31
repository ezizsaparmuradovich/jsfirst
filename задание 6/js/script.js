let menu = document.querySelector(".menu"),
	menuItem = document.querySelectorAll(".menu-item"),
	column = document.querySelectorAll(".column"),
	title = document.querySelector(".title"),
	adv = document.querySelector(".adv"),
	promptClass = document.querySelector(".prompt");
	promptId = document.querySelector("#prompt");

// Поменяли местами два элемента
menu.insertBefore(menuItem[2], menuItem[1]);

//let body = document.getElementsByTagName("body");
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
//добавим элемент li
let li = document.createElement("li");
//добавим к элементу li класс menu-item
li.classList.add("menu-item");
//появляется на странице li
menu.appendChild(li);
//напишем текст внутри li
li.textContent = "Пятый пункт";
//заменить тект
title.textContent = "Мы продаем только подлинную технику Apple" 
//удаляем рекламу
column[1].removeChild(adv);
//отношение к технике apple
promptId.textContent = prompt("Какое у Вас отношение к технике apple","");