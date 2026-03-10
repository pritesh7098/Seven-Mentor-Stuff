let count = 0; // 1

const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");

function updateUI() {
  countDisplay.textContent = count;
}

incBtn.addEventListener("click", () => {
  count++; // 1
  updateUI(); // 1
  console.log("updated count by adding 1 in prev count", count);
});

decBtn.addEventListener("click", () => {
  count--;
  updateUI();
  console.log("updated count by sub 1 in prev count", count);
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
  console.log("reset value", count);
});
