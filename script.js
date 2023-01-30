
document.querySelector('#task-form__button').addEventListener('click', function() {
    if(document.querySelector('#task-form__input').value.length == 0){
        alert('Please Enter a Task')
    }else{
        document.querySelector('#task-list').innerHTML += `
        <div id="task-list__item" class="task-list__item">
        <span id="task-list__name" class="task-list__name">
        <em class="fa-regular fa-circle"></em>
        ${document.querySelector('#task-form__input').value}
        </span>
        <button id="task-list__delete" class="task-list__delete" >
         <em class="fa-solid fa-xmark"></em>
        </button>
        </div>
        `;

        haveTasks();

        document.querySelector('#task-form__input').value = '';

        var current_tasks = document.querySelectorAll('#task-list__delete');
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
                haveTasks();
            }
            
        }

        var tasks = document.querySelectorAll('#task-list__item');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
            
        }

    }
})

function haveTasks() {
    if(document.querySelector('#task-list').children.length === 0){
        document.querySelector('#task-list').classList.add('hide');
    }else{
        document.querySelector('#task-list').classList.remove('hide');
    }
}

haveTasks();