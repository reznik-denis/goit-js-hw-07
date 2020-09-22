const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

function onInputChange(event) {
    event.currentTarget.value !== `` ?
    refs.span.textContent = event.currentTarget.value :
    refs.span.textContent = `незнакомец`;
}

refs.input.addEventListener('input', onInputChange)