
const btn = document.getElementById("addBtn");

btn.addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const list = document.getElementById("taskList");

  const li = document.createElement("li");
  li.innerText = input.value;

  list.appendChild(li);
  input.value = "";
});
