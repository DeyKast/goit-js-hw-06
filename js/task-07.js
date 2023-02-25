let inputEl = document.querySelector("input#font-size-control");
let textEl = document.querySelector("span#text");

inputEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
  console.log(textEl.style.fontSize);
});
