let formInput = document.getElementById("name-input");
let spanName = document.getElementById("name-output");

formInput.addEventListener("input", handleInput);

function handleInput(event) {
  spanName.textContent = event.target.value.trim();
  if (!event.target.value.trim()) {
    spanName.textContent = "Anonymous";
  }
}
