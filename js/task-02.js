const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const items = []

ingredients.forEach((ingredient, i) => {
  items.push(document.createElement("li"))
  items[i].textContent = ingredient;
  items[i].classList.add("item");
});
list.append(...items);
