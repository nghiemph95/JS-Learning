function createTodoElement(todo) {
  if (!todo) return;

  const liElement = document.createElement('li');
  liElement.textContent = todo.title;
  // thêm id cho todo
  liElement.dataset.id = todo.id;
}

function renderTodoList(todoList, ulElementId) {
  if (!Array.isArray(todoList) || todoList.length === 0) return;
  //find ul element
  const ulElement = document.getElementById(ulElementId);
  if (!ulElement) return;

  // loop through todoList
  for (const todo of todoList) {
    // each todo -> create li element -> append to ul
    const liElement = createTodoElement(todo);
    ulElement.appendChild(liElement);
  }
}

//main
(() => {
  const todoList1 = [
    { id: 1, title: 'Learn JS' },
    { id: 2, title: 'Learn ReactJS' },
    { id: 3, title: 'Learn NextJS' },
  ];

  renderTodoList(todoList1, 'todoList1');

  //   const todoList2 = [
  //     { id: 1, title: 'Learn JS' },
  //     { id: 2, title: 'Learn ReactJS' },
  //     { id: 3, title: 'Learn NextJS' },
  //     { id: 4, title: 'Learn Git' },
  //   ];

  //   renderTodoList(todoList2, 'todoList2');

  //do something else
})();
