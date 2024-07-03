document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    taskItem.querySelector('span').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
}
