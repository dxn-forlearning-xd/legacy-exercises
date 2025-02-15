const todos = [
  { name: 'make dinner', dueDate: '2025-12-22' },
  { name: 'wash dishes', dueDate: '2025-12-21' },
];
renderTodolist();

function renderTodolist() {
  let todoListHTML = '';

  for (let i = 0; i < todos.length; i++) {
    const todoObject = todos[i];
    const { name, dueDate } = todoObject;
    const html = `<div>${name} </div> 
    <div>${dueDate}</div> 
        
        <button onclick="todos.splice(${i}, 1);
        renderTodolist();
        "  class="delete-todo-button" >Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const addEl = document.querySelector('.js-add');
  const name = addEl.value;
  const dateEl = document.querySelector('.js-date');
  const date = dateEl.value;
  todos.push({
    name: name,
    dueDate: date,
  });
  addEl.value = '';
  renderTodolist();
}
