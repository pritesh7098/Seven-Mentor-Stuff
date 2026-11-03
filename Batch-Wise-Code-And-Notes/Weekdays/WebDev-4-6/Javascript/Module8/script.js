// 1) manual function declaration

// function addition(a,b) {

// // actual code goes here

// console.log("This is fun body");
// console.log(a+b); // 30

// }

// let final = addition("10",20)
// console.log(typeof final);

/*  Typescript fun  */

// function addition2(a:number, b:number) : number {

// console.log(a+b);

// }

// addition2(10,20)

// every code you write in JS it not a typesafe
// but every code you write inside TS will take care of type safety as well as code concistancy

/* -------------------------------------------------------- */

// 3) Default parameters

// function greetUser(name = "rahul") {
//   console.log("Hello to : ", name);
// }

// greetUser();

// with default parameter you can pass par and arg at one place
// code a addition fun with default parameters

/* ------------------------------------------------------------ */

// 4) Function expresion

// let addition = function (a, b) {
//   // code
//   //console.log(a + b);

//   return a + b;
// };

// console.log(addition(2, 4));
// console.log(typeof addition);

/* --------------------------------------------------------- */

// 5) Arrow function - Introduced in newer syntax of js / ES6

let username = "rahul";

let greetFun = () => `Hello to the user whose name is : ${username} `;

// console.log(greetFun()); // here we are printing ref variable as whole fun is store inside it

// arrow fun for adding two no

/* let addFun = (a,b)=> `addtion is : ${a+b}`; 
console.log(addFun(5,6)) */

// let add = (a, b) => a + b; // clean arrow fun

// let num1 = 22;
// let num2 = 20;

// let total = add(num1, num2);
// console.log(total);

/* -------------------------------- */

// 6) anonymous function

setTimeout(function () {
  // console.log("This function is anonymous and execute after 5 secs");
}, 5000); // this fun will execute after 5 secs

// you don't have to assign a name to this fun

/* ------------------------------------ */

// 7) IIFE

setTimeout(function () {
   console.log("This function is anonymous and execute after 0 secs");
}, 0);

(function () {
  console.log("This is a IIFE which execute immediately");
})();

// iife most commonly used in db calls when we need some data urgently