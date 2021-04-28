const createTodosDisplay = (project) => {

    const body = document.querySelector('div#bodyContainer');

    const container = document.createElement('div');
    container.setAttribute('id', 'todosContainer');
    body.appendChild(container);

    for ( let i = 0; i < project.todosArray.length; i++) {
        const container = document.createElement('div');
        container.classList.add('todoContainer');
        let obj = project.todosArray[i];
        container.innerHTML = `<p>${obj.name}</p><p>${obj.dueDate}</p><p>${obj.priority}</p><p>${obj.completion}</p>`;
        body.appendChild(container);
    }

};

export { createTodosDisplay }