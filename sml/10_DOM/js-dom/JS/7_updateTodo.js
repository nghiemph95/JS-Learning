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
      const currentStatus = todoElement.dataset.status;
      const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';

      //get current todo list from localStorage
      const todoList = getTodoList();
      //update status of current todo
      const index = todoList.findIndex((x) => x.id === todo.id);
      if (index >= 0) {
        todoList[index].status = newStatus;
        //save to local storage
        localStorage.setItem('todo_list', JSON.stringify(todoList));
      }

      // update data-status on li element
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
      /** Save to localStorage */
      // lấy todo list hiện tại
      const todoList = getTodoList();
      //   console.log({ todoList, removeId: todo.id });
      // todo muốn remove có id là
      const newTodoList = todoList.filter((element) => element.id !== todo.id);
      localStorage.setItem('todo_list', JSON.stringify(newTodoList));

      // remove DOM
      todoElement.remove();
    });
  }

  // add click event for edit button
  const editButton = todoElement.querySelector('button.edit');
  if (editButton) {
    editButton.addEventListener('click', () => {
      // lấy dữ liệu mới nhất(lastest) từ localStorage
      const todoList = getTodoList();

      //find todo
      const lastestTodo = todoList.find((element) => element.id === todo.id);
      if (!lastestTodo) return;
      //populate data to todo form (đẩy thông tin lên todoForm (input form))
      populateTodoForm(lastestTodo);
    });
  }

  return todoElement;
}

function populateTodoForm(todo) {
  // query todo form
  const todoForm = document.getElementById('todoFormId');
  if (!todoForm) return;

  // dataset.id = todo.id (Cập nhật dataId lên cái form để phân biệt edit thằng nào)
  todoForm.dataset.id = todo.id;

  // set values for form controls (set những giá trị cần thiết vô control)
  // popular to todoForm input
  const todoInput = document.getElementById('todoText');
  if (!todoInput) return;
  todoInput.value = todo.title;

  // popular to checkbox input
  const todoCheckBoxInput = document.getElementById('checkBox');
  if (!todoCheckBoxInput) return;
  todoCheckBoxInput.checked = todo.status === 'completed' ? true : false;
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
  //Hiện tại hàm getTodoList() có khả năng xảy ra lỗi nếu như
  // trong localStorage của bạn chưa có key todo_list
  try {
    return JSON.parse(localStorage.getItem('todo_list')) || [];
  } catch {
    return [];
  }
}

function handleTodoFormSubmit(event) {
  event.preventDefault();
  const todoForm = document.getElementById('todoFormId'); // Form todo
  if (!todoForm) return;

  // get form value and checkbox value
  const todoInput = document.getElementById('todoText'); // Input form
  const todoCheckBox = document.getElementById('checkBox'); // Checkbox form
  // validate form values
  if (!todoInput) {
    alert('todo input not found');
    return;
  }

  // xác định add hoặc edit mode
  const isEdit = Boolean(todoForm.dataset.id);

  if (isEdit) {
    //tìm todo hiện tại
    const todoList = getTodoList();
    const index = todoList.findIndex((element) => element.id.toString() === todoForm.dataset.id);
    if (index < 0) return;

    //cập nhật content and status
    todoList[index].title = todoInput.value;
    todoList[index].status = todoCheckBox.checked === true ? 'completed' : 'pending';

    //save
    localStorage.setItem('todo_list', JSON.stringify(todoList));

    // cập nhật DOM changes
    // find li element có id = todoForm.dataset.id
    const liElement = document.querySelector(`ul#todoList > li[data-id="${todoForm.dataset.id}"]`);
    if (liElement) {
      // lấy input form truyền xuống title của todoList dựa theo id
      const titleElement = liElement.querySelector('.todo__title');
      if (titleElement) titleElement.textContent = todoInput.value;

      // lấy input checkbox truyền xuống trạng thái của todoList theo id
      liElement.dataset.status = todoCheckBox.checked === true ? 'completed' : 'pending';
      const newStatusFromCheckbox = liElement.dataset.status; // completed or pending

      const todoListStatus = liElement.querySelector('div.todo');
      if (!todoListStatus) return;
      const newStatus = newStatusFromCheckbox === 'completed' ? 'alert-success' : 'alert-secondary';
      todoListStatus.classList.remove('alert-success', 'alert-secondary');
      todoListStatus.classList.add(newStatus);

      // đổi màu button khi truyền trạng thái của checkbox xuống todoList
      const buttonStatusUpdate = liElement.querySelector(
        'button.btn.btn-dark, button.btn.btn-success'
      );
      if (!buttonStatusUpdate) return;
      const buttonChangeColor = newStatusFromCheckbox === 'completed' ? 'btn-success' : 'btn-dark';
      buttonStatusUpdate.classList.remove('btn-success', 'mark-as-done', 'btn-dark');
      buttonStatusUpdate.classList.add(buttonChangeColor);

      // đổi content của button khi truyền trạng thái của checkbox xuống todoList
      const buttonChangeContent = newStatusFromCheckbox === 'completed' ? 'Reset' : 'Finish';
      buttonStatusUpdate.textContent = buttonChangeContent;
    }
  } else {
    //add mode
    const newTitle = todoInput.value;
    if (!newTitle) return;

    //get trạng thái của checkbox trước khi tạo mới todoList
    const statusInput = todoCheckBox.checked === true ? 'completed' : 'pending';

    const newTodo = {
      id: Date.now(), // tạm coi là 1 unique
      title: todoInput.value,
      status: statusInput,
    };

    // save to localStorage
    const todoList = getTodoList();
    todoList.push(newTodo);
    localStorage.setItem('todo_list', JSON.stringify(todoList));

    // apply DOM changes
    const newLiElement = createTodoElement(newTodo);

    const ulElement = document.getElementById('todoList');
    if (!ulElement) return;

    ulElement.appendChild(newLiElement);
  }

  //reset form để quay lại add thêm cái mới
  delete todoForm.dataset.id;
  delete todoForm.dataset.status;
  console.log(todoForm);
  if (todoForm) todoForm.reset();
}

//main
(() => {
  //   const todoList = [
  //     { id: 1, title: 'Learn JS', status: 'pending' },
  //     { id: 2, title: 'Learn ReactJS', status: 'completed' },
  //     { id: 3, title: 'Learn NextJS', status: 'pending' },
  //   ];

  const todoList = getTodoList();
  renderTodoList(todoList, 'todoList');

  //do something else
  //register submit event for todo form
  const todoForm = document.getElementById('todoFormId');
  if (todoForm) {
    todoForm.addEventListener('submit', handleTodoFormSubmit);
  }
})();
