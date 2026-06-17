let count = 0;// 1

const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");

function updateUI() {
  countDisplay.textContent = count;
}

incBtn.addEventListener("click", () => {
  count++; // 1
  // updateUI();
});

decBtn.addEventListener("click", () => {
  count--;
  updateUI();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});
