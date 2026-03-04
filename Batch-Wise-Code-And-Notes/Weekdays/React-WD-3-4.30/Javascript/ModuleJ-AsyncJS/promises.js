// 1) with ref variable

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("This promise is successfully resolve");
  }, 5000);
});

// console.log(myPromise);

/* ------------------- */

// 2) .then .catch

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(
      "This will be executed regardless promise is fullfiled or fail",
    );
  });

console.log(myPromise);
