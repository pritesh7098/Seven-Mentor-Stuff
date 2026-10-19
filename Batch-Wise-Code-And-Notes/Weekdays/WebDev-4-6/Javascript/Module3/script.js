console.log("hello from vs code");

/* Variable declarations  */

/* var name="rahul";
console.log(name);

let name2; 
console.log(name2);

const name3; */ // throws error

/* var and let allows us to define empty var as it shows undefined for it but in case of const we have to give some value to it to avoid syntax error */

/* --------------- Redeclaration --------------------- */

/* var name="rahul";
console.log(name);

let name2 = "manav"; 
console.log(name2);

const name3 = "sai"; */

// ----------------------

/* var name="sachin"
console.log(name); 

// for var you can redeclare a variable val 

// for let and const you can't redeclare 

let name2 = "omkar"
console.log(name2);  

const name3 = "shyam " */

/* --------------------------- Reassignment ----------------------- */

/* var name = "omkar" 

name ="rahul" 

console.log(name); // reassignment is allowed 

let number = 2; 

number = 3; 

console.log(number); // reassignment is allowed 

const pi = 3.14
pi = 22.22
console.log(pi); */

// error : Assignment to constant variable, it's not allowed

/* ------------------- Hoisting ------------------------------------ */

// console.log(name); // 1st step -> undefined , as js execute the code line by line so js dont't know what is under this name

//var name = "rahul "

/* console.log(number);

let number = 2;  */

/* console.log(pi);

const pi = 3.14; */

// var can be hoisted and shows undefined
// but in a case of let and const it is throwing an error

/* --------------------------------------------------- */

function studentData() {
  var name = "rahul";
  let age = 24;
  const rollNo = 12;

  function data2() {
    console.log("this is fun under function ");
    console.log(name);
  }

  data2();
}

studentData();

// global function - access throughout prog scope 

// local function - access withing a specific scope 