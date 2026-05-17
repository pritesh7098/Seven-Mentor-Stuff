// data fetching with javascript

/* async function githubProfile(user) {
  // actual logic

  const response = await fetch(`https://api.github.com/users/${user}`);

  const finalResult = await response.json();

  console.log(finalResult.login);
}

githubProfile("pritesh7098"); */

// Promises approach - .then .catch  , promise chaining

function getUserData(user) {
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.url);
    })
}

getUserData("pritesh7098");



