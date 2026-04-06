// data fetching function

async function userData(userID) {
  const response = await fetch(`https://api.github.com/users/${userID}`);

  const finalResponse = await response.json()

  console.log(finalResponse);
}

userData("pritesh7098") 