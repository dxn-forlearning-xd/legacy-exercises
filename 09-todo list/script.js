const todos = [];
function addTodo(){
    const addEl = document.querySelector('.js-add');
    const name = addEl.value
    todos.push(name);
    console.log(todos);
    addEl.value='';
};
