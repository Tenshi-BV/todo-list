const createTodosDisplay = (project) => {

    const body = document.querySelector('div#bodyContainer');

    const container = document.createElement('div');
    container.setAttribute('id', 'todosContainer');
    body.appendChild(container);

    for ( let i = 0; i < project.todosArray.length; i++) {
        const container = document.createElement('div');
        container.classList.add('todosContainer');
        let obj = project.todosArray[i];
        container.textContent = obj.name;
        body.appendChild(container);
    }

};

export { createTodosDisplay }