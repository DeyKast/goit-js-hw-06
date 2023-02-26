let counterValue = 0;

let valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});
