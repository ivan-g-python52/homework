'use strict';
//safeOutput() - выводит текст из input в safe-output используя textContent
//unsafeOutput() - выводит текст из input в unsafe-output используя innerHTML

function safeOutput() {
  let userInput = document.getElementById('user-input');
  const inputVlaue = userInput.value;
  let safeText = document.getElementById('safe-output');
  if (inputVlaue) {
    safeText.textContent = inputVlaue;
    userInput.value = '';
  } 
}

function unsafeOutput() {
  let userInput = document.getElementById('user-input');
  const inputVlaue = userInput.value;
  let unsafeText = document.getElementById('unsafe-output');
  if (inputVlaue) {
    unsafeText.innerHTML = inputVlaue;
    userInput.value = '';
  } 
}
