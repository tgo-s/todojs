
document.getElementById('addTask').addEventListener('click', function(){
    let value = document.getElementById('taskDesc').value;
    if(value) addTaskTodo(value);
    document.getElementById('taskDesc').value = '';
});

function addTaskTodo(text){
    let taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerText = text;

    let btnCheckTask = document.createElement('button');
    btnCheckTask.classList.add("btn-check-task");
    btnCheckTask.addEventListener('click', completeTask);

    let separator = document.createElement('span');

    let btnRemoveTask = document.createElement('button');
    btnRemoveTask.classList.add('btn-remove-task');
    btnRemoveTask.addEventListener('click', removeTaskFromList);

    taskItem.appendChild(btnCheckTask);
    taskItem.appendChild(separator);
    taskItem.appendChild(btnRemoveTask);

    let taskList = document.getElementById('taskList');
    taskList.insertBefore(taskItem, taskList.childNodes[0]);
}

function removeTaskFromList(event){
    let taskList = this.parentNode.parentNode;
    taskList.removeChild(this.parentNode);
}

function completeTask(event){
    let taskList = document.getElementById('taskList');
    let completedList = document.getElementById('completedList');
    let task = this.parentNode;

    taskList.removeChild(this.parentNode);

    completedList.insertBefore(task, completedList.childNodes[0]);
}