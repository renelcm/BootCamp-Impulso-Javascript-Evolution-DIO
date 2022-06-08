const btnAdd = document.getElementById('add-task');
const list_task = document.getElementById('tasks1');

var id = 0;

function sendTask()
{
    const txt = document.getElementById('new-task-i').value;
    const text = document.createTextNode(txt);

    
    const TaskContainer = document.createElement('div');
    const check = document.createElement('input');
    const label = document.createElement('label');


    TaskContainer.classList.add(id);
    id++;

    label.classList.add('msg');

    check.setAttribute('type', 'checkbox');
    check.setAttribute('name',txt);
    check.setAttribute('id', txt);
       
    label.setAttribute('for',txt);
    label.appendChild(text);
    
    TaskContainer.appendChild(check);
    TaskContainer.appendChild(label);
    
    list_task.appendChild(TaskContainer);
    console.log(text);
}

btnAdd.addEventListener("click", sendTask);