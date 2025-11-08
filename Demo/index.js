// console.log(`hello`);
// console.log(`I am a Software Developer`);

// window.alert(`This is an alert!`);

// document.getElementById("myH1").textContent =  `Hello`;
// document.getElementById("myP").textContent = 'This is Mikey!';

// -------------------------------------------------------------------------------------

// This is a single line comment

/*
    This 
    is 
    a 
    Multiple line Comment
*/

// -------------------------------------------------------------------------------------

// Variable = A container that stores a value. Behaves as if it were the value it contains.

/*
    1. Declaration let x;
    2. Assignment x = 100;
*/

// let x; 
// x = 10;
// let price = 10.01;
// let gpa = 8.9;

// console.log(typeof gpa);
// console.log(`You are ${x} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is ${gpa}`);

// let firstName= "Mikey";
// let favFood = "Pasta";
// let email = "mikey@gmail.com";

// console.log(typeof firstName);
// console.log(`My name is ${firstName}`);
// console.log(`My Favourite food is ${favFood}`);
// console.log(`My Email is ${email}`);

// let online = true;
// let forSale = true;

// console.log(typeof online);
// console.log(`Mikey is online : ${online}`);
// console.log(`Is this car for sale : ${forSale}`);

// -------------------------------------------------------------------------------------

/* arithmetic operators = operands (values, variables, etc.)
                        operators (+ - * /)
                        ex. 11 = x + 5; 
*/

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
//let extrastudents = students % 3;

//students += 1;
//Students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;

//students++;
//students--;

// console.log(students);

// -------------------------------------------------------------------------------------

/* 
    operator precedence
    1. Parenthesis()
    2. Exponents
    3. Multiplication & Division & Modulo
    4. Addition & Subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2;

// console.log(result);

// ----------------------------------------------------------------------------------

//How to accept user input

// 1. Easy way = Window prompt
// 2. Professional Way = HTML textbox

// let username;

// username = window.prompt("What's you username ? ");

// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// } 

// ----------------------------------------------------------------------------------

// type conersion = change the datatype of a value to another (strings, numbers, booleans)

// let age = window.prompt("How old are you ? ");
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

// let x = "croissant";
// let y = "croissant";
// let z = "croissant";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//-------------------------------------------------------------------------------------

// const = a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt('Enter the raidus of the circle');
// radius = Number(radius);

// circumference = 2 * PI * radius;

// document.getElementById("mySubmit").onclick = function() {
//     radius = document.getElementById("myText").value;
//     radius = Number(radius); 
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + "cm";
// }

// ----------------------------------------------------------------------------------

// Counter Program

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");

// let count = 0;

// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }

// decreaseBtn.onclick = function() {
//     count--;
//     countLabel.textContent = count
// }

// resetBtn.onclick = function() {
//     count = 0;
//     countLabel.textContent = count;
// }

// -------------------------------------------------------------------------------------

//Math = build-in object that provides a collection of properties and methods

// console.log(Math.PI);
// console.log(Math.E);

// let x = 3;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(z);
// console.log(max);
// console.log(min);

//--------------------------------------------------------------------------------------

// Random Number Generator

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("myLabel1");
// const label2 = document.getElementById("myLabel3");
// const label3 = document.getElementById("myLabel2");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function() {
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3
// }

// // If statements = If a condition is true execute some code if not, do something else

// let age = 25;

// if(age >= 18) {
//     console.log("You are old enough...");
// } else {
//     console.log("You must be 18+");
// }

// let time = 9;

// if(time < 12) {
//     console.log("Good Morning!");
// } else {
//     console.log("Good Afternoon");
// } 

// let isStudent = false;

// if(isStudent) {
//     console.log("You are a student!");
// } else {
//     console.log("You are not a student!");
// }

let age = 0;

//  let hasLicense = false;

//  if(age >= 18) {
//     console.log("You are old enough to drive");
//     if(hasLicense) {
//         console.log("You have your license!")
//     } else {
//         console.log("You do not have your license yet!");
//     }
//  } else {
//     console.log("You must be 18+ to have a license");
//  }

if(age >= 100) {
    console.log("You are too old to enter this site");
} else if (age == 0) {
    console.log("You can't enter. You were just born.");
}else if(age >= 18) {
    console.log("You are old enough to enter this site");
} else if(age < 0) {
    console.log("Your age can't below 0")
} else {
    console.log("You must be 18+ to enter this site");
}




