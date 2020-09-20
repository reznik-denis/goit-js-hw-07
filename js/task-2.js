const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listCreateEl = ingredients.map((ingredient) => {
    const ingredientEL = document.createElement('li');
    ingredientEL.textContent = `${ingredient}`;
    return ingredientEL;
});

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...listCreateEl);

console.log(ingredientsList);


