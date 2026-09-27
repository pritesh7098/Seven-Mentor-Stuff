// 1st Approach : function for data fetching with async await approach 

async function githubUserData(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  const data = await response.json() // json data is readable 

  console.log(data);
  

}

githubUserData("pritesh7098");

// 2nd Approach : .then and .catch - Promises chaining 

// convert this code to the promises 
