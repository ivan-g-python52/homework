'use strict';
const styleDemo = document.getElementById('style-demo');

function changeColor() {
    styleDemo.style.backgroundColor = 'lightblue';
}

function changeSize() {
    styleDemo.style.width = '300px';
    styleDemo.style.height = '100px';
}

function addBorder() {
    styleDemo.style.borderRadius = '15px';
    styleDemo.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.3)';
    styleDemo.style.border = '2px solid #4a90e2';
}

function resetStyles() {
    styleDemo.style.backgroundColor = '';
    styleDemo.style.width = '';
    styleDemo.style.height = '';
    styleDemo.style.borderRadius = '';
    styleDemo.style.boxShadow = '';
    styleDemo.style.border = '1px solid black';
    styleDemo.style.padding = '20px';
}