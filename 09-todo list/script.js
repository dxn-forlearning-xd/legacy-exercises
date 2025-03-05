const todos = JSON.parse(localStorage.getItem('todos')) || [];
renderTodolist();

document.querySelector('.add-todo-button').addEventListener('click', () => {
  addTodo();
});

document.querySelector('.js-add').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

function renderTodolist() {
  let todoListHTML = '';
  todos.forEach((todo, index) => {
    const { name, dueDate, completed } = todo;
    todoListHTML += `
            <div class="todo-item ${completed ? 'completed' : ''}">
                <input type="checkbox" class="toggle-checkbox" data-index="${index}" ${
      completed ? 'checked' : ''
    }>
                <span class="todo-name">${name}</span>
                <span class="todo-date">${dueDate}</span>
                <button class="delete-todo-button" data-index="${index}">Delete</button>
            </div>
        `;
  });

  document.querySelector('.todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.delete-todo-button').forEach((button) => {
    button.addEventListener('click', function () {
      const index = this.dataset.index;
      todos.splice(index, 1);
      saveAndRender();
    });
  });

  document.querySelectorAll('.toggle-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      const index = this.dataset.index;
      todos[index].completed = this.checked;
      saveAndRender();
    });
  });
}

function addTodo() {
  const nameInput = document.querySelector('.js-add');
  const dateInput = document.querySelector('.js-date');
  const errorMessage = document.querySelector('.error-message');

  if (!nameInput.value.trim() || !dateInput.value) {
    errorMessage.textContent = 'Please enter a valid task and date!';
    return;
  }

  errorMessage.textContent = '';

  todos.push({
    name: nameInput.value,
    dueDate: dateInput.value,
    completed: false,
  });

  nameInput.value = '';
  dateInput.value = '';

  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodolist();
}
