// 1) if statement

// let age = 18;

// if (age >= 20) {
//   console.log("statement executed successfully");
// } // if we just using if statement - it will only execute when the operaton succeed
// else {
//   console.log("Statement not executed succesfully and comes to else block ");
// }

/* ------------------------------------------------------------------- */

// let marks = 80;

// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 80) {
//   console.log("B");
// } else if (marks >= 70) {
//   console.log("C");
// } else {
//   console.log("candidate haven't secured the good marks ");
// }

// else if used in condition where we have a multiple options

/* ------------------------------------------------ */

// switch statement
// task - code one more example based on switch statement
// let day = 3;

// switch (day) {
//   case 1:
//     console.log("The day is monday");
//     break;

//   case 2:
//     console.log("The day is Tuesday ");
//     break;

//   case 3:
//     console.log("The day is wednesday ");
//     break;

//   case 4:
//     console.log("The day is Thursday");
//     break; // if you don't include break after the statement it will jump to the next statement as well.

//   // Fallback output

//   default:
//     console.log("It is sunday ");
// }

/* ------------------------------------------- */

// ternary operator

let age = 20; // 20
let isValid = true

// ? - if satisfied
// : else if not satisfied

let result = age >= 22 || isValid ? "you are eligible" : "you are not eligible";

console.log(result);

// && - both the conditions should be true 
// || - at least one condition should be true 



/* if (age >= 18) {
  console.log("you are eligible");
} else {
  console.log("not eligible ");
} */
