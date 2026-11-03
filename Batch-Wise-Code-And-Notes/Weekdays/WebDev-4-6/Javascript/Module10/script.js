// strings in javascript represent in 3  ways

let string = "first string ";
let string2 = "second string";
let string3 = `third string inside backticks`;

let user = "rahul";
// variable interpolation
let greet = `Hello to the ${user}, you are welcome`;

// console.log(greet);

/* common string properties */

// length peroperty

let str = "India";
// console.log(str.length); // property
// calculates length of a string

// uppercase or lowercase

// console.log(str.toUpperCase()); // methods

let capital = "INDIA".toLowerCase();
// console.log(capital);

// trim

let trim = "    JavaScript     ".trim();
console.log(trim);

let trim2 = "    Python     ";
console.log(trim2.trim()); // it trims the extra spaces//

// indexOF

let strmethod = "JavaScript";
// console.log(strmethod.indexOf('S')); // 4 - position of a letter S

// slice(start,end)

let mystring = "Fullstack";
// console.log(mystring.slice(0, 4));

// IT slices your string into pieces

// replace() method

let myText = "Btech is worst choice";
// console.log(myText.replace("worst", "best"));
// what to replace with what ?

/* ---------------------------- */

// character access

let myStr = "Maharashtra";
//console.log(myStr[1]); // with index
// console.log(myStr.charAt(3)); // with charAt

// String immutability

// strings cannot e changed , only replace it

let replaceString = "Pune";

replaceString[0] = "S";
console.log(replaceString);

// you can't mute the string, you can replace it
