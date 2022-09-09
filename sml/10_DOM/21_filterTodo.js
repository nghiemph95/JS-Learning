/** filter todo */

function filterTodo(filterStatus) {
  const todoElementList = document.querySelectorAll("#todoList > li");

  for (const todoElement of todoElementList) {
    const isShow =
      todoElement === "all" ||
      todoElement.dataset.status === filterStatus;

    todoElement.hidden = !isShow;
  }
}

function initFilterStatus() {
  // find select
  const filterStatusSelect = document.getElementById("filterStatus");
  if (!filterStatusSelect) return;
  // attach event
  filterStatusSelect.addEventListener("change", () => {
    filterTodo(filterStatusSelect.value);
  });
}

//main
(() => {
  initFilterStatus();
})();
