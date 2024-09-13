function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let btn = document.querySelector(".change-color");
let body = document.querySelector("body");
let color = document.querySelector(".color");
btn.addEventListener("click", changeColor);
function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}
