/* Asynchronous operations */

 async function fetchUserData(user) {
  const data = await fetch(`https://api.github.com/users/${user}`);

  const finalResponse = await data.json();
  console.log(finalResponse.url);
}

fetchUserData("pritesh7098"); 

/* promisified*/

function fetchUserData(user) {
  const data = fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.url);
    })
    .catch((error) => {
      console.log("Something went wrong", error);
    });
}

fetchUserData("pritesh7098");
