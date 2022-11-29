"use strict"
//                                       Основи Синтаксиса JavaScript
// Варіант №1
console.log("Вчим JS")
// Варіант №2
console.log("JS")
console.log("Вчим")
// Варіант №3
// console.log("JS") console.log("Вчим")--- Не вірно------
console.log("JS");
console.log("Вчим");
// Варіант №4
// console.log("JS);---Не вірно----
console.log("JS");
console.log("Вчим");



//                                           Змінні в JavaScript
// 1) let userEyeColor = 'Green';

// 2)
let user;
let userName;
userName = 'Вася';
user = userName;
console.log(user);

// 3)
// Варіант №1
let userOne = 'Вася'; let age = 36
console.log('Вася');
console.log(age);

// Варіант №2
let myage = 36;
// Але краще myAge
console.log(myage);

// Варіант №3
const BLOCK_HEIGHT = 14 + 50;
console.log(BLOCK_HEIGHT);

// Варіант №4
const BLOCK_HEIGHT1 = 100;
console.log(BLOCK_HEIGHT1);

// Варіант №5
if (true) {
	var size = 15;
}
console.log(size);

//                                                 Типи даних JAVASCRIPT. 

// Варіант №1
let userAge = 36;
let userInfo = `Фрилансер ${userAge}`;
console.log(userInfo);
// Варіант №2
let userHeight = 145 / 0;
console.log(userHeight);
console.log(typeof userHeight);
// Варіант №3
let userNameOne;
console.log(typeof userNameOne);
// Варіант №4
let userSize = "45" / "8";
console.log(typeof userSize);