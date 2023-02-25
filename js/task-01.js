const categoriesEl = document.querySelector("#categories").children;

console.log(`Number of categories: ${categoriesEl.length}`);

// -------------------------------------------------------------

const categoriesItemEl = document.querySelectorAll(".item");

categoriesItemEl.forEach((element) => {
  const categoryTitleEl = element.querySelector("h2").textContent;
  const categoryItemsEl = element.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitleEl}`);
  console.log(`Elements: ${categoryItemsEl}`);
});
