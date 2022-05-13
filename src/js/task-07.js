const sizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');
sizeControl.value = 0;

const fontSizeControl = event => {
    textSpan.style.fontSize = `${event.currentTarget.value}px`;
}

sizeControl.addEventListener('input', fontSizeControl);


