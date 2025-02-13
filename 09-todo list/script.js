const todos = ['Make dinner', 'Wash dishes'];
renderTodolist();

function renderTodolist() {
  let todoListHTML = '';

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const addEl = document.querySelector('.js-add');
  const name = addEl.value;
  todos.push(name);
  console.log(todos);
  addEl.value = '';
  renderTodolist();
}
