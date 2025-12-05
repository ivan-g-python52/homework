'use strict';
//addSimpleContent() - добавляет новый параграф с текстом "Новый текстовый блок"
//addHTMLContent() - добавляет HTML блок с заголовком, параграфом и списком
//clearContent() - очищает содержимое контейнера

function addSimpleContent() {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Новый текстовый блок';

  const container = document.getElementById('dynamic-content');
  container.append(paragraph);
}

function addHTMLContent() {
  const heading = document.createElement('h2');
  heading.textContent = 'Динамический заголовок';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Это новый параграф';

  const container = document.getElementById('dynamic-content');
    container.append(heading, paragraph);
}