function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
let colorName = document.querySelector("span.color");

const colorChangeBtn = document.querySelector("button.change-color");

colorChangeBtn.addEventListener("click", () => {
  let currentColor = getRandomHexColor();
  colorName.textContent = currentColor;
  bodyEl.style.backgroundColor = currentColor;
});
