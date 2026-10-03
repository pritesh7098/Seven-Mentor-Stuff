// 1st Approach : function for data fetching with async await approach

// async function githubUserData(username) {
//   const response = await fetch(`https://api.github.com/users/${username}`);

//   const data = await response.json(); // json data is readable

//   console.log(data);
// }

// githubUserData("pritesh7098");

// 2nd Approach : .then and .catch - Promises chaining

function githubUserData(username) {
  // promise chaining with .then and .catch

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      return response.json(); // the res in converted to json format now.
    }) // promise chaining - where one thing is dependent on other
    .then((finalData) => {
      console.log(finalData); // data will get printed here
    })
    .catch((error) => {
      console.log("Error while fetching the data from github", error);
    }); // it will produce an error if the first 2 steps are not getting executed 
}

githubUserData(""); // client error - we have passed empty arg/id   
