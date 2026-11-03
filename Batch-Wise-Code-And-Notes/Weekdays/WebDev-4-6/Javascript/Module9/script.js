// user defined datatype is nothing but a combination of predefined datatypes with user defined values.

// Ways to define arrays

let studentInfo = ["Rahul", 24, "admitted", true]; // array of multiple values

// usng new array()

let data = new Array(2, 4, 6, 8);

// console.log(studentInfo);
// console.log(data);

//console.log(data[3]); // you can access array element using it's index

// modify the element

data[0] = 3;

// console.log(data); // 3

// array length

let arr = [1, 2, 3, 4];
// console.log("the length of array is : " , arr.length); // property

// important array methods

// push

let cricket = ["Bat", "Ball", "stumps"];
cricket.push("Helmet"); // adding in last
cricket.pop();
cricket.pop(); // it removes ele from last

cricket.unshift("umpire"); // added at start
cricket.shift(); // remove from the start

// console.log(cricket.indexOf("Ball")); // 1st index

console.log(cricket.includes("cat")); // gives ans in true and false only
// console.log(cricket);

// Array destructuring 

let numbers = [100,200,300]; 

let [a,b,c,d,e] = numbers; // numbers is ref variable 

//console.log(numbers) ;
//console.log(d); // used mostly in reactJs/frontend lib or fw 

// Spread operator 

let arr1 = [1,2,3,4,5] 
let arr2 = [...arr1] // same array copied here without external decln 

// console.log(arr2);// 1-5    

let combineAll = [...arr1,...arr2]
console.log(combineAll); // it will return a one whole array

