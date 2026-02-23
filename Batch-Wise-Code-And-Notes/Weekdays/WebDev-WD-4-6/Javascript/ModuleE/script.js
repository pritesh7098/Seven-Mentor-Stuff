// Datatypes

// number

let age = 24; // number

let _name = "pritesh"; // string

// typeof operator

//console.log(typeof age);

// boolean

// true/false

let isLoggedIn = 1;
let isEligible = 2;

//console.log(typeof isLoggedIn, typeof isEligible)

// undefined - something is there but i dont' know what it is ?

let a = undefined; // implicit or explicit
//console.log(typeof a);

// null

let value = null;
//console.log(typeof value); //  type of null = object

// bigINT

/* let numbers = 12345678999999999999999999999999999999999n;
console.log(typeof numbers); */

// symbol datatype ( ES6 newly introduced datatype)

let id1 = Symbol("id");
let id2 = Symbol("id");
//console.log(typeof id1); // false

/* -------------------------------------------- */

// non-primitive datatypes

// user info

// let $name = "pritesh"; // console.log($name )
// const AGE = 24;
// let address = "PCMC";

// object

let userInfo = {
  // key value pairs
  // key : var name , value : actual value

  $name: "pritesh",
  age: 24,
  address: "PCMC",
};

//console.log(userInfo.age);

// array as an datatype

let subjects = ["math", "history", "geo", "cs"];
//console.log(subjects);

// type of operator 

console.log(typeof subjects );
console.log(typeof "123");


