function createTodoElement(todo) {
  if (!todo) return;

  // find template
  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return null;

  // clone li template
  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  todoElement.dataset.id = todo.id;
  todoElement.dataset.status = todo.status;

  // render todo status
  const divElement = todoElement.querySelector('div.todo');
  const buttonElement = todoElement.querySelector('button.btn.btn-success');

  if (divElement && buttonElement) {
    const alertClass = todo.status === 'completed' ? 'alert-success' : 'alert-secondary';
    divElement.classList.remove('alert-secondary');
    divElement.classList.add(alertClass);

    const buttonClass = todo.status === 'completed' ? 'btn-success' : 'btn-dark';
    buttonElement.classList.add(buttonClass);

    const buttonContent = todo.status === 'completed' ? 'Reset' : 'Finish';
    buttonElement.textContent = buttonContent;
  } else return null;

  // update content where needed
  const titleElement = todoElement.querySelector('.todo__title');
  if (titleElement) titleElement.textContent = todo.title;

  // TODO: attach events
  // add click event for mark-as-done button
  const markAsDoneButton = todoElement.querySelector('button.mark-as-done');
  if (markAsDoneButton) {
    markAsDoneButton.addEventListener('click', () => {
      console.log('mark as done click');
      const currentStatus = todoElement.dataset.status;
      const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';
      todoElement.dataset.status = newStatus;

      const newAlertClass = currentStatus === 'pending' ? 'alert-success' : 'alert-secondary';
      divElement.classList.remove('alert-success', 'alert-secondary');
      divElement.classList.add(newAlertClass);

      const newButtonClass = currentStatus === 'pending' ? 'btn-success' : 'btn-dark';
      buttonElement.classList.remove('btn-success', 'mark-as-done', 'btn-dark');
      buttonElement.classList.add(newButtonClass);

      const newButtonContent = currentStatus === 'pending' ? 'Reset' : 'Finish';
      buttonElement.textContent = newButtonContent;
    });
  }
  // add click event for remove button
  const removeButton = todoElement.querySelector('button.remove');
  if (removeButton) {
    removeButton.addEventListener('click', () => {
      console.log('remove click');
      todoElement.remove();
    });
  }

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

function getTodoList() {
  try {
    return JSON.parse(localStorage.getItem('todo_list'));
  } catch {
    return [];
  }
}

//main
(() => {
  const todoList = [
    { id: 1, title: 'Learn JS', status: 'pending' },
    { id: 2, title: 'Learn ReactJS', status: 'completed' },
    { id: 3, title: 'Learn NextJS', status: 'pending' },
  ];

  renderTodoList(todoList, 'todoList');

  //do something else
})();
