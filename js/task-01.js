const categoriesEl = document.querySelector("#categories").children;

console.log(`Number of categories: ${categoriesEl.length}`);

// -------------------------------------------------------------

const categoriesItemEl = document.querySelectorAll(".item");

categoriesItemEl.forEach((element) => {
  const categoryTitleEl = element.firstElementChild.textContent;
  const categoryItemsEl = element.lastElementChild;

  console.log(`Category: ${categoryTitleEl}`);
  console.log(`Elements: ${categoryItemsEl.children.length}`);
});
