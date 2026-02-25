// Functions in JS

/* function greet() {
  // code

  console.log("Hello javascript");
}

console.log(greet()) */ // undefined for calling another console

/* fun with parameter's */
/* 
function signIN(user="Guest") { 

console.log("Hello :", user)


}

console.log(signIN()); */

/* ------------------------------------- */

// js under the hood

/* let a = 2; 
console.log(a);


let b = 4; 
console.log(b);


setTimeout(() => {
  
   console.log(8+12)

}, 5000);



function greet(){

  console.log("hello");
  

}

greet()
 */

/* ------------------------------------------- */

// arrow function

/* let add = (a,b)=> console.log(a+b)

console.log(add(2,4))

let greets = (uName) => console.log("Hello :", uName);
 greets("Pratik") */

/* ----------------------------------------------- */

/* Anonymous fun  */

// setTimeout(function () {
//   console.log("This is an anonymous function");
// }, 2000);

/* ----------------------------------------- */

// IIFE's

setTimeout(() => {
  console.log("print after 0 sec");
}, 0);

setTimeout(() => {
  console.log("print after 8 sec");
}, 8000);

(function () {
  console.log("Immediately invoking a function");
})();

function print() {
  console.log("hello again");
}

print();

setTimeout(() => {
  console.log("print after 5 sec");
}, 5000);
