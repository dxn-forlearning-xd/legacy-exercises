document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert('Please Enter a Task');
  } else {
    //     document.querySelector('#tasks').innerHTML += `
    //     <div class="task">
    // <span class ="taskname">
    //   ${document.querySelector('#newtask input').value}
    // </span>
    // <button class='delete'>
    // ${'Delete'}
    // </button>
    //     </div>
    //     `;
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    const taskName = document.createElement('span');
    taskName.classList.add('taskname');
    taskName.textContent = document.querySelector('#newtask input').value;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'delete';
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(deleteBtn);
    document.querySelector('#tasks').appendChild(taskDiv);

    //   var current_tasks = document.querySelectorAll('.delete');
    //   for (var i = 0; i < current_tasks.length; i++) {
    //     current_tasks[i].onclick = function () {
    //       this.parentNode.remove();
    //     };
    //   }
    // }
    // var tasks = document.querySelectorAll('.task');
    // for (var i = 0; i < tasks.length; i++) {
    //   tasks[i].onclick = function () {
    //     this.classList.toggle('completed');
    //   };
    // }

    document.querySelector('#tasks').addEventListener('click', function (e) {
      if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
      }
      if (e.target.classList.contains('taskname')) {
        e.target.classList.toggle('completed');
      }
    });
  }

  document.querySelector('#newtask input').value = '';
};
