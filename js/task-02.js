const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((element) => {
  const liEl = document.createElement("li");
  console.log(liEl);
  liEl.classList.add("item");
  liEl.textContent = element;
});
const list = document.querySelector(".ingredients");
list.appendChild(liEl);
