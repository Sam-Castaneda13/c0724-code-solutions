'use strict';
let todos = readTodos();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const JSONToDos = localStorage.getItem('todos-storage');
  if (JSONToDos) {
    return JSON.parse(JSONToDos);
  } else {
    return [];
  }
}
