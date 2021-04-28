const createTodoDisplay = (todo) => {

    const body = document.querySelector('div#bodyContainer');

    const container = document.createElement('div');
    container.setAttribute('id', 'todoContainer');
    body.appendChild(container);

    const name = document.createElement('h2');
    name.setAttribute('id', 'todoName');
    name.textContent = todo.name;
    container.appendChild(name);

    const description = document.createElement('p');
    description.setAttribute('id', 'todoDescription');
    description.textContent = todo.description;
    container.appendChild(description);

    const dueDate = document.createElement('p');
    dueDate.setAttribute('id', 'todoDueDate');
    dueDate.textContent = todo.dueDate;
    container.appendChild(dueDate);

    const priority = document.createElement('p');
    priority.setAttribute('id', 'todoPriority');
    priority.textContent = todo.priority;
    container.appendChild(priority);

    const creationDate = document.createElement('p');
    creationDate.setAttribute('id', 'todoCreationDate');
    creationDate.textContent = todo.creationDate;
    container.appendChild(creationDate);

    const projectName = document.createElement('p');
    projectName.setAttribute('id', 'todoProjectName');
    projectName.textContent = todo.project.name;
    container.appendChild(projectName);

    const completion = document.createElement('p');
    completion.setAttribute('id', 'todoCompletion');
    completion.textContent = todo.completion;
    container.appendChild(completion);

};

export { createTodoDisplay }