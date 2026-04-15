// Functions in javascript

/* function print() {
  console.log("hello world");
}

print(); // calling the function 
print();
print(); */

// addition

// parameters - user defined

/* function add(a, b) {
  console.log(a + b);
} */

// add(); // actual value - arguments

// Default parameters

/* function greet(name = "guest") {
  console.log("Name:", name);
}
 */
// greet();

// Arrow functions

function greet() {
  console.log("Hello JS from normal function");
}

greet();

// arrow way

const greet2 = () => {
  console.log("Hello JS from arrow function");
  console.log("line2");
  console.log("line 3");
};

greet2();
