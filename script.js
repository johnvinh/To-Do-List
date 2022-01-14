(() =>
{
    // Load items from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
    for (let i = 0; i < tasks.length; i++) {
        createListItem(tasks[i]);
    }
})();

function createListItem(taskName)
{
    const taskText = taskName;
    const task = document.createElement('span');
    task.innerHTML = taskText;

    // Task content
    const listItem = document.createElement('li');
    listItem.appendChild(task);

    // Remove Button
    const removeButton = document.createElement('input');
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('value', 'Remove');
    removeButton.setAttribute('class', 'listbutton');
    removeButton.addEventListener('click', (e) =>
    {
        listItem.parentElement.removeChild(listItem);
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const newTasks = tasks.filter((task) => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    });
    listItem.appendChild(removeButton);

    // Mark as completed button
    const doneButton = document.createElement('input');
    doneButton.setAttribute('type', 'button');
    doneButton.setAttribute('value', 'Done');
    doneButton.setAttribute('class', 'listbutton');
    doneButton.addEventListener('click', (e) =>
    {
        listItem.classList.add('completed');
    });
    listItem.appendChild(doneButton);

    document.querySelector('#items').appendChild(listItem);
    // clear the textbox after the task is added for convenience
    document.querySelector('#new-task').value = "";
}

function addTask(e)
{
    const taskText = document.querySelector('#new-task').value;
    // Add elements to DOM
    createListItem(taskText);
    // Update local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearList(e)
{
    // Remove elements from DOM
    const listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].parentElement.removeChild(listItems[i]);
    }
    // Clear localstorage
    localStorage.setItem('tasks', JSON.stringify([]));
}

document.querySelector('#add-task').addEventListener('click', addTask);
document.querySelector('#clear-list').addEventListener('click', clearList);