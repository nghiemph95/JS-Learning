/** Khi ta muốn tạo nhiều thẻ html (li, ul)
 * bằng cách nào đó có thể sử dụng document.createLement nhưng
 * việc này tốn rất nhiều thời gian nếu buộc phải tạo nhiều element khác tương tự
 */

/** Issue with complex markup */
<li>JavaScript</li>;

function createTodoElement(todo) {
  const liElement = document.createElement("li");
  liElement.textContent = todo.title;

  return liElement;
}

// nhưng khi gặp 1 markup phức tạp thì tạo từng cái sẽ làm mất rất nhiều thời gian
<li>
  <div class="todo alert alert-secondary" role="alert">
    <div class="d-flex justify-content-between align-items-center">
      <p class="todo__title mb-0">TODO TITLE</p>
      <div class="todo__actions">
        <button type="button" class="btn btn-success mark-as-done">
          Finish
        </button>
        <button type="button" class="btn btn-danger remove">
          Remove
        </button>
      </div>
    </div>
  </div>
</li>;

/** Để giải quyết vấn đề : Sử dụng template
 * 1. Sử dụng template
 * 2. Clone template content
 * 3. Thay đổi text content trong mỗi clone và gắn thêm event nếu cần
 */

// html file
<template id="todoTemplate">
  <li>
    <div class="todo alert alert-secondary" role="alert">
      <div class="d-flex justify-content-between align-items-center">
        <p class="todo__title mb-0">TODO TITLE</p>
        <div class="todo__actions">
          <button type="button" class="btn btn-success mark-as-done">
            Finish
          </button>
          <button type="button" class="btn btn-danger remove">
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
</template>;
