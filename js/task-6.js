const inputEl = document.querySelector('#validation-input');

function onInputChangeColorBorder(event) {
    if (event.currentTarget.value.length == inputEl.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
    return
}

inputEl.addEventListener('change', onInputChangeColorBorder);