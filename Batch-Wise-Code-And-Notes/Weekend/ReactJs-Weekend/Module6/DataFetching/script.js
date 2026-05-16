// data fetching with javascript

async function githubProfile(user) {
  // actual logic

  const response = await fetch(`https://api.github.com/users/${user}`);

  const finalResult = await response.json();

  console.log(finalResult.login);
}

githubProfile("pritesh7098");
