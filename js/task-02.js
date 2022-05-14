const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const appendItem = document.querySelector('#ingredients');

const getIngredient = ingredients.map(ingredient => {
  const createItem = document.createElement('li');
  createItem.textContent = ingredient;
   return createItem;
});

const itemIngredient = appendItem.append(...getIngredient);
