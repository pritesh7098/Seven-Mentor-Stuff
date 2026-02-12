// primitive datatypes
// number

/* let age = 22;
let price = 150.75;
let invalid = NaN;
let infinite = Infinity;
 */
// strings

/* let name2 = "om shanti on";
let fullName = `My full name is: ${name2} `;

console.log(fullName); */

// boolean

/* let isLoggedIn = true;
let isValid = false;
 */
// undefined

/* let a = undefined;
console.log(a); */

// null

/* let data = null; 
console.log(data); */

// bigint

/* let big = 987654321234567890n;
console.log(big);
 */
// symbol

/* let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2); // false */

/* --------------------------------- */

// typeof operator

// console.log(typeof 100); // "number"
// console.log(typeof "Hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (JS bug)
// console.log(typeof {}); // "object"
// console.log(typeof []); // "object"
// console.log(typeof function () {}); // "function"

/* ----------------------------------------------------- */

// ternary operator

//let age = 14;

//let result = age >= 18 ? "eligible" : "not eligible";
//console.log(result);

// combining conditions

/* let hasId = true

if (age >= 18 && hasId) {
  //console.log("eligible");
} */

// or

let hasID = false;
let age = 14;

if (age >= 14 || hasID) {
  // console.log("eligible");
}

// not

/* let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in first");
}
 */

// == ===

let _name = "123";
let _number = 123;

console.log(typeof _name, typeof _number);
console.log(typeof _name === typeof _number);
