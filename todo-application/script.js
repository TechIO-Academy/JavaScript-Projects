document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const inputField = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');
    const noTasksMessage = document.createElement('p');
    noTasksMessage.textContent = 'No tasks yet. Add some!';
    noTasksMessage.style.textAlign = 'center';
    noTasksMessage.style.display = 'none'; // Hidden by default
    todoList.parentElement.insertBefore(noTasksMessage, todoList); // Insert before the list

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks();

    addButton.addEventListener('click', function() {
        const taskValue = inputField.value.trim();
        if (taskValue === '') {
            alert('Please enter a task.');
            return;
        }
        addTask(taskValue);
        inputField.value = ''; // Clear input field
    });

    todoList.addEventListener('click', function(e) {
        const target = e.target;
        if (target.tagName === 'LI' && !target.classList.contains('delete-btn')) {
            toggleCompletion(target);
        } else if (target.className === 'delete-btn') {
            deleteTask(target.parentElement);
        }
    });

    function addTask(task) {
        tasks.push({ text: task, completed: false });
        saveTasks();
        renderTasks();
    }

    function renderTasks() {
        todoList.innerHTML = ''; // Clear current tasks
        if (tasks.length === 0) {
            noTasksMessage.style.display = 'block';
        } else {
            noTasksMessage.style.display = 'none';
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task.text;
                if (task.completed) {
                    li.classList.add('completed');
                }
                li.setAttribute('data-index', index);

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.className = 'delete-btn';
                li.appendChild(deleteBtn);

                todoList.appendChild(li);
            });
        }
    }

    function toggleCompletion(li) {
        const index = li.getAttribute('data-index');
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    }

    function deleteTask(li) {
        const index = li.getAttribute('data-index');
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
