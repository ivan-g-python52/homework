'use strict';
//Реализуйте функции:
//changeText() - изменяет текст элемента на Текст был изменен!
//addText() - добавляет к текущему тексту " (дополнено)"
//resetText() - возвращает исходный текст

const mainText = document.getElementById('text-element');

function changeText() {
  mainText.textContent = 'Текст был изменен!';
}

function addText() {
  mainText.textContent += " (дополнено)";
}

function resetText() {
  mainText.textContent = 'Исходный текст этого параграфа';
}