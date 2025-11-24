'use strict';
let tasks = ["Выучить основы JS", "Помыть посуду", "Купить продукты"];

function addTask(list, taskName) {
  if (list.includes(taskName)) {
    console.log("Задача уже существует");
  } else {
    list.push(taskName);
    console.log(`Задача "${taskName}" добавлена`);
  }
}

function completeTask(list, taskName) {
  const taskIndex = list.indexOf(taskName);
  
  if (taskIndex !== -1) {
    list.splice(taskIndex, 1);
    console.log(`Задача "${taskName}" выполнена и удалена из списка`);
  } else {
    console.log("Задача не найдена");
  }
}


console.log("Начальный список задач:", tasks);
addTask(tasks, "Почитать книгу");
addTask(tasks, "Сделать зарядку");
addTask(tasks, "Помыть посуду");
console.log("Список после добавления:", tasks);
completeTask(tasks, "Помыть посуду");
completeTask(tasks, "Несуществующая задача");
console.log("Финальный список:", tasks);
