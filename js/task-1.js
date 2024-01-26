const categories = document.querySelectorAll('.item');

function categoriesNumber(element) {
  console.log(`Number of categories: ${element.length}`);
  element.forEach(item => {
    let category;
    let elements;
    category = `Category: ${item.firstElementChild.textContent}`;
    elements = `Elements: ${item.lastElementChild.children.length}`;
    console.log(category);
    console.log(elements);
  });
}

categoriesNumber(categories);
