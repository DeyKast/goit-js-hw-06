function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxSize = 30;
  let boxesMarkup = "";

  containerForBoxesEl.style.cssText = `display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  `;

  for (let i = 0; i < amount; i++) {
    const createBox = `<div style="height: ${boxSize}px; width: ${boxSize}px; background-color: ${getRandomHexColor()}; display: flex; justify-content: center; align-items: center">${boxNum}
    </div>`;

    boxesMarkup += createBox;

    boxSize += 10;
    boxNum++;
  }
  containerForBoxesEl.innerHTML += boxesMarkup;
}

function destroyBoxes() {
  containerForBoxesEl.innerHTML = "";
  boxNum = 1;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

const containerForBoxesEl = document.querySelector("#boxes");
const inputNumberOfBoxes = document.querySelector("#controls input");

let boxNum = 1;

createBtn.addEventListener("click", () => {
  const numberOfBoxes = inputNumberOfBoxes.value;

  createBoxes(numberOfBoxes);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
