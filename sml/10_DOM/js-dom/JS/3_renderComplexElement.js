function createTodoElement(todo) {
  if (!todo) return;

  // find template
  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return null;

  // clone li template
  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  todoElement.dataset.id = todo.id;
  // update content where needed
  const titleElement = todoElement.querySelector('.todo__title');
  if (titleElement) titleElement.textContent = todo.title;

  // TODO: attach events

  return todoElement;
}

function renderTodoList(todoList, ulElementId) {
  if (!Array.isArray(todoList) || todoList.length === 0) return;

  //find ul element
  const ulElement = document.getElementById(ulElementId);
  if (!ulElement) return;

  // loop through todoList
  for (const todo of todoList) {
    // each todo -> create li element -> append to ul
    const listElement = createTodoElement(todo);
    ulElement.appendChild(listElement);
  }
}

//main
(() => {
  const todoList = [
    { id: 1, title: 'Learn JS' },
    { id: 2, title: 'Learn ReactJS' },
    { id: 3, title: 'Learn NextJS' },
  ];

  renderTodoList(todoList, 'todoList');

  //do something else
})();
