'use strict';
const red = document.getElementById('red-slider');
const green = document.getElementById('green-slider');
const blue = document.getElementById('blue-slider');
const colorPreview = document.getElementById('color-preview');
const colorCode = document.getElementById('color-code');


  
  

red.addEventListener('input', function (event) {
    let redValue = red.value;
    let greenValue = green.value;
    let blueValue = blue.value;
    const redNumber = document.getElementById('red-value');
    redNumber.textContent = `${redValue}`;
    colorPreview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorCode.textContent = `RGB(${redValue}, ${greenValue}, ${blueValue})`;
});

green.addEventListener('input', function (event) {
    let redValue = red.value;
    let greenValue = green.value;
    let blueValue = blue.value;
    const greenNumber = document.getElementById('green-value');
    greenNumber.textContent = `${greenValue}`;
    colorPreview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorCode.textContent = `RGB(${redValue}, ${greenValue}, ${blueValue})`;
});

blue.addEventListener('input', function (event) {
    let redValue = red.value;
    let greenValue = green.value;
    let blueValue = blue.value;
    const blueNumber = document.getElementById('blue-value');
    blueNumber.textContent = `${blueValue}`;
    colorPreview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorCode.textContent = `RGB(${redValue}, ${greenValue}, ${blueValue})`;
});

const mouseBox = document.getElementById('random-btn');
mouseBox.addEventListener('click', function(event){

    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    const redNumber = document.getElementById('red-value');
    const greenNumber = document.getElementById('green-value');
    const blueNumber = document.getElementById('blue-value');
    redNumber.textContent = `${redValue}`;
    greenNumber.textContent = `${greenValue}`;
    blueNumber.textContent = `${blueValue}`;
    colorPreview.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorCode.textContent = `RGB(${redValue}, ${greenValue}, ${blueValue})`;
});