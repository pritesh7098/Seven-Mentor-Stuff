/* console.log("Start");

setTimeout(() => {
    console.log("setTimeout Callback");
}, 5000);

Promise.resolve().then(() => {
    console.log("Promise Resolved");
});

console.log("End"); */

/* --------------------------- */

// Async Await

// promises

/* const url = " https://api.github.com/users/pritesh709";

fetch(url)
  .then(function (response) {
    return response.json(); // convert response to JSON
  })
  .then(function (data) {
    console.log("following", data.following);

    console.log("User Name:", data.name);
    console.log("Username:", data.login);
    console.log("Followers:", data.followers);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
 */

/* ----------------------------------- */

// Async - Await Practical

// first step - craete an async fun
/* 
async function fetchData() {
  const url = " https://api.github.com/users/pritesh7098";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    console.log("User Name:", data.name);
    console.log("Username:", data.login);
    console.log("Followers:", data.followers);
    console.log("Following:", data.following);
    console.log("Bio:", data.bio);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
 */

/* Another program  */

async function fetchTodo() {
  const url = "https://jsonplaceholder.typicode.com/todos/2";

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    console.log("userId:", data.userId);
    console.log("id:", data.id);
    console.log("title:", data.title);
    console.log("boolean:", data.completed);
  } catch (error) {
    console.log("error:", error);
  }
}

fetchTodo();
