let items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  let title = item.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  let itemList = item.querySelectorAll("li");
  console.log(
    `Elements: ${itemList.length}`
  );
});
