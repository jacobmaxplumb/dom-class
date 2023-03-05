const titleElement = document.getElementById('title');
const inputElement = document.getElementById('input');
const colorInputElement = document.getElementById('color-input');
const changeTextButtonElement = document.getElementById('change-text-button');

changeTextButtonElement.addEventListener('click', () => {
    titleElement.textContent = inputElement.value;
    inputElement.value = '';
})

function changeColor() {
    const currentColor = titleElement.style.color;
    titleElement.style.color = colorInputElement.value;
    const newColor = titleElement.style.color;
    if (currentColor === newColor) alert('You need to pick a new or valid color');
    colorInputElement.value = '';
}


