const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const getIngredient = ingredients.map(
  ingredient => {
    const createItem =
      document.createElement('li');
    createItem.textContent = ingredient;
    console.log(createItem);
    return createItem;
  }
);
const appendItem = document.querySelector(
  'ul#ingredients'
);
console.log(appendItem);
const itemIngredient = appendItem.append(
  ...getIngredient
);
