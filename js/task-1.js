const categorysEl = document.querySelectorAll('.item');
console.log(`В списке ${categorysEl.length} категори`)

categorysEl.forEach((categoryEl) => {
    const nameCategory = categoryEl.querySelector('h2');
    console.log(`Категория: ${nameCategory.textContent}`);
    const elementsLenthEl = categoryEl.querySelectorAll('li');
    console.log(`Количество элементов: ${elementsLenthEl.length}`);
});