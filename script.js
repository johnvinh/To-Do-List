function addTask(e)
{
    const task = document.createElement('span');
    task.innerHTML = document.querySelector('#new-task').value;

    const listItem = document.createElement('li');
    listItem.appendChild(task);
    const removeButton = document.createElement('input');
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('value', 'Remove');
    removeButton.setAttribute('class', 'remove');
    removeButton.addEventListener('click', (e) => listItem.parentElement.removeChild(listItem));
    listItem.appendChild(removeButton);
    document.querySelector('#items').appendChild(listItem);
}

document.querySelector('#add-task').addEventListener('click', addTask);