const itemList =
  document.querySelectorAll('.item');
console.log(
  `Number of categories: ${itemList.length}`
);

itemList.forEach(element => {
  const titleCategories =
    element.querySelector('h2');
  console.log(
    'Category:',
    titleCategories.innerHTML
  );

  const elementsCategories =
    element.querySelectorAll('li');
  console.log(
    'Elements:',
    elementsCategories.length
  );
});
