const display = document.querySelector(".display");
const decreaseButton = document.querySelector(".container button:first-child");
const increaseButton = document.querySelector(".container button:last-child");

let count = localStorage.getItem("count") || 0;

function updateDisplay() {
  display.textContent = count;
}

decreaseButton.addEventListener("pointerdown", function () {
  count--;
  localStorage.setItem("count", count);
  updateDisplay();
});

increaseButton.addEventListener("pointerdown", function () {
  count++;
  localStorage.setItem("count", count);
  updateDisplay();
});

updateDisplay();
