// 1) number 

let number = 22; 
let marks = 86.20; 
let invalid = NaN; 
let infinite = Infinity

// console.log(typeof number);
// console.log(typeof marks);
// console.log(typeof invalid);
// console.log(typeof infinite);

// js interpret the datatypes at run time it dynamically which data-type is used in prog 

// typeof - kind of operator that's let you know about which type of data it is 

// 2) Strings 

let name = "rahul" 
// console.log(name);

let data = `the name of candidate is : ${name} `
// console.log(data);  

// this is the new syntax which includes both the string and dynamic values at one place 

let percentage = 99.92 ; // exercise - add backticks syntax 

// 3) Boolean - yes / no 

let isLegal = true; 
let isPresent = false; 

// console.log( isLegal);

// 4) undefined 

let a; 
// console.log(a);
// console.log(typeof a);

// undefined actually returns is types as an undefined only 

// 5) null 

let info = null;  
//console.log(info);
//console.log(typeof info);
// type of a null as an datatypes in object.

// 6) bigInt 

let largeNo = 853766698884n; // 12 digits 
console.log(largeNo);
//console.log(typeof largeNo);
// //add n if you need to explicitely defined as an bigint if you not so then it is concidered as an number only doesen't matter how long the no is. 

// 7) Symbol 

let id1 = Symbol("id");
let id2 = Symbol("id");
//console.log(id1 == id2); // type as well as value 

// used in adv javascript but nowdays with newer frameworks and lib the use case of this datatype is lmited. 


// difference between == and === 

// == checks for value
// === checks for value awa for types 

let num = 2
let num2 = "2" // string  

// console.log(num === num2 );// returns false 





