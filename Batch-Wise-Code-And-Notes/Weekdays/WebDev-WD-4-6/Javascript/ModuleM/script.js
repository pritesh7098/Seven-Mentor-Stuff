const btn = document.getElementById("change");
const title = document.getElementById("title");

btn.addEventListener("click", () => {
  title.innerText = "Text Changed!";
  title.style.color = "purple";
});

// create a simple h1 , paragraph and a button , whenver you click on a button the text should be change and background color should also be changed. 
