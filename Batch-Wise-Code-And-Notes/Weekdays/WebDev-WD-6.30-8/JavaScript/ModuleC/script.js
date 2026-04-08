// variable declarations

// 1-var
// redeclaration and reassignment is possible

var name = "rahul";
//console.log(name); // 1

// 2- let

//console.log(fruit); // tdz

let fruit = "Apple";

//fruit = "mango" // reassignment is possible in let as well

// let fruit = "banana" // cannot redeclare

// 3- const

const pi = 3.14;

//console.log(pi); // cannot be redeclare or reassign as meant for constant values 

var a = 2; 

function foo() {
  // All variables are accessible within functions.
  var bar = 1;
  let baz = 2;
  const qux = 3;

 /*  console.log(baz); // 2
  console.log(qux); // 3 */
}

foo()

  //console.log(bar); // 1
  console.log(a);
  



