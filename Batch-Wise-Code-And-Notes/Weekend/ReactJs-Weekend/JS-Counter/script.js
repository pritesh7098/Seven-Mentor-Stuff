// step 1:

let count = 0; // 0 -> state -> the thing which changes with the time 

const countDisplay = document.getElementById("count");
const increment = document.getElementById("incBtn");
const decrement = document.getElementById("decBtn");
const reset = document.getElementById("resetBtn");

// update count function

const updateCount = () => {
  countDisplay.textContent = count;
};

increment.addEventListener("click", () => {
  count++; // count = count + 1; // prev => prev + 1
  updateCount();
  // console.log(count);
});
