// Arrays 
/* 
let array = ["apple","banana","pineapple",24,true] // 1st way 

let data = new Array("apple","banana","pineapple",24,true) // 2nd way 


array.unshift("banana")
console.log(array); */

//const { useState } = require("react");

/* --------------------------------------------- */

/* let arr = ["A", "B", "C"];
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */

// destructuring an array

let numbers = [10, 20, 30];

let [a, b, c] = numbers; // destructing the array 

// console.log(a); // 10


// state 

//const[count,setCount] = useState(0)

// spread opr in array 

let arr1 = [1, 2, 3];
let arr2 = [...arr1,"apple","pinepapple"];
let arr3 = [...arr1,...arr2,"this is array 3 include both the arrays"]

console.log(arr3); 






