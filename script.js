function addTask(e)
{
    const task = document.querySelector('#new-task').value;
    document.querySelector('#items').innerHTML += `<li>${task}</li>`;
}

document.querySelector('#add-task').addEventListener('click', addTask);