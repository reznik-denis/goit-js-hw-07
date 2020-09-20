let counterValue = 0;
const increment = () => {
    counterValue += 1;
    return valueDispley.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    return valueDispley.textContent = counterValue;
};


const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const valueDispley = document.querySelector('#value');
btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);

