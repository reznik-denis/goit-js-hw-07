const refs = {
    input: document.querySelector('#input-number'),
    btnRender: document.querySelector('[data-action="render"]'),
    btnDestroy: document.querySelector('[data-action="destroy"]'),
    divBoxes: document.querySelector('#boxes'),
}

function createBoxes(amount) {
    const createCollection = [];
    for (let i = 0; i <= amount; i += 1) {
        const newEl = `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: rgb(${Math.random() * (255 - 1) + 1}, ${Math.random() * (255 - 1) + 1}, ${Math.random() * (255 - 1) + 1});"></div>`;
        createCollection.push(newEl);
    }
    console.log(createCollection);
    const createCollectionString = createCollection.join('');
    refs.divBoxes.insertAdjacentHTML("beforeend", createCollectionString);
    return
}

let amount
function onInputCurrentValue(event) {
    return amount = event.currentTarget.value;
}
console.log(amount)
refs.input.addEventListener('input', onInputCurrentValue);

refs.btnRender.addEventListener('click', createBoxes(amount));