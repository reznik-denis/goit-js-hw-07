const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}


function onInputChangeFontSize (event) {
    refs.span.style.fontSize = `${event.currentTarget.value}px`;
    return
}

refs.input.addEventListener('input', onInputChangeFontSize);