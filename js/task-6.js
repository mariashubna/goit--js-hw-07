function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let input = document.querySelector("input");
let create = document.querySelector("button[data-create]");
let destroy = document.querySelector("button[data-destroy]");
let boxes = document.querySelector("#boxes");

create.addEventListener("click", () => createBoxes(input.value));

function createBoxes(amount) {
  let size = 30;
  let step = 10;
  let markup = "";

  if (amount > 0 && amount <= 100) {
    input.value = "";
    for (let i = 0; i < amount; i++) {
      let color = getRandomHexColor();
      markup += `<div style="width:${size}px; height:${size}px; background-color:${color}"></div>`;
      size += step;
    }
    boxes.innerHTML = markup;
  }
}

destroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}
