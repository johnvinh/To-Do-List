function addTask(e)
{
    const task = document.createElement('span');
    task.innerHTML = document.querySelector('#new-task').value;

    // Task content
    const listItem = document.createElement('li');
    listItem.appendChild(task);

    // Remove Button
    const removeButton = document.createElement('input');
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('value', 'Remove');
    removeButton.setAttribute('class', 'listbutton');
    removeButton.addEventListener('click', (e) => listItem.parentElement.removeChild(listItem));
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

function clearList(e)
{
    const listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].parentElement.removeChild(listItems[i]);
    }
}

document.querySelector('#add-task').addEventListener('click', addTask);
document.querySelector('#clear-list').addEventListener('click', clearList);