const refs = {
    input: document.querySelector('#input-number'),
    btnRender: document.querySelector('[data-action="render"]'),
    btnDestroy: document.querySelector('[data-action="destroy"]'),
    divBoxes: document.querySelector('#boxes'),
}

function createBoxes(amount) {
    if (amount > 100) {
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid');
        return
    } else {
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');
    }
    const createCollection = [];
    for (let i = 0; i < amount; i += 1) {
        const newEl = `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: rgb(${Math.random() * (255 - 1) + 1}, ${Math.random() * (255 - 1) + 1}, ${Math.random() * (255 - 1) + 1});"></div>`;
        createCollection.push(newEl);
    }
    const createCollectionString = createCollection.join('');
    refs.divBoxes.insertAdjacentHTML("beforeend", createCollectionString);
    return
}

function destroyBoxes() {
    refs.divBoxes.innerHTML = '';
}

refs.btnRender.addEventListener('click', () => createBoxes(refs.input.value));

refs.btnDestroy.addEventListener('click', () => destroyBoxes());