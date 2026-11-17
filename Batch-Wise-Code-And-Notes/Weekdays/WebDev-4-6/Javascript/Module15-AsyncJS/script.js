// synchronous code executing line by line and not blocking any thread
// console.log(1);
// console.log(2);
// console.log(3);

// async code - non blocking execution

// console.log("this will execute first ");

// let interval = setInterval(() => {
//   console.log("This statement will execute after 2 seconds");
// }, 2000);

// console.log("This is the third statement ");

// let interval2 = setInterval(() => {
//   console.log("hi");
// }, 2000);

/* whenever we have to terminate the operation after a certain amount of time we use clearTimeout and clearInterval */

//clearInterval(interval2);

/* ---------------------------------------------------------- */

// Async functions

// 1 - callback functions - a function which is passed as an argument to another function

// function downloadPDF(Callback) {
//   console.log("Downloading PDF ... "); // highest priority
//   setTimeout(() => {
//     console.log("This will execute after 2 secs");
//     Callback("File downloaded after 2 secs"); // executed after 2 secs
//   }, 2000);
// }

// a function callback is passes as an argument to another fun called as downloadPDF

// downloadPDF((msg) => {
//   console.log(msg);
// });

// callback hell generated pyramid of doom where one function is completely depenedent on the other

// that's why we have a better way to write async functions - promises

/* ----------------------------------------------------- */

// 2 - Promises and promise chaining in Javascript

// prmises states - either resolved or reject

/* const myPromise = new Promise((resolved, reject) => {
  // setTimeout - execute the statement after 2 secs

  setTimeout(() => {
    reject("successfully rejected ");
    console.log("Promise resolved after 2 seconds ");
  }, 2000);
}); */

// either your req to a backend will be resolved successfully or reject

function getGithubProfile(username) {
  // fetch method to handle api's in js
  // fetch is also a promise , either i will get the data or i will get the error

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      return response.json();
      // so it will convert the response to the json
      // we can reccive multiple responses from server but json is standard that's why we are using it
    })
    .then((finalData) => {
      console.log(finalData); // actual data will be printed here
    })
    .catch((error) => {
      console.log("Error while fetching ");
    });
}

getGithubProfile("pritesh7098");
