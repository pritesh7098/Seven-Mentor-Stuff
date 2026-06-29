// function to fetch data from server

 async function githubUserProfile(username) {
  // logic

  const reposnse = await fetch(`https://api.github.com/users/${username}`);

  const finaldata = await reposnse.json();

  console.log(finaldata);
}

githubUserProfile("octacat"); 

/* ------------------------------------------------ */

// Promises with .then and .catch

function githubUserProfile() {
  fetch(`https://api.github.com/users/pritesh7098`)
    .then(
      (response) => response.json(), // json form
    )
    .then((finaldata) => console.log(finaldata))
    .catch((error) => {
      console.log("Error while fetching data", error);
    });
}

githubUserProfile();
