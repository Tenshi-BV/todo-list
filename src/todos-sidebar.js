const createTodosSidebar = (todosMethods) => {

    const body = document.querySelector('div#bodyContainer');

    const container = document.createElement('div');
    container.setAttribute('id', 'sidebarContainer');
    body.appendChild(container);

    const createTodo = document.createElement('button');
    createTodo.classList.add('projectsSidebar');
    createTodo.textContent = 'create todo';
    createTodo.addEventListener('click', (project) => {
        todosMethods.createTodo();
    })
    container.appendChild(createTodo);

    const deleteTodo = document.createElement('button');
    deleteTodo.classList.add('projectsSidebar');
    deleteTodo.textContent = 'delete todo';
    deleteTodo.addEventListener('click', (project,todo) => {
        todosMethods.deleteTodo();
    })
    container.appendChild(deleteTodo);

    const renameTodo = document.createElement('button');
    renameTodo.classList.add('projectsSidebar');
    renameTodo.textContent = 'rename todo';
    renameTodo.addEventListener('click', (todo) => {
        todosMethods.renameTodo();
    })
    container.appendChild(renameTodo);

    const reDescribeTodo = document.createElement('button');
    reDescribeTodo.classList.add('projectsSidebar');
    reDescribeTodo.textContent = 'change description';
    reDescribeTodo.addEventListener('click', (todo) => {
        todosMethods.reDescribeTodo();
    })
    container.appendChild(reDescribeTodo);

    const reDateTodo = document.createElement('button');
    reDateTodo.classList.add('projectsSidebar');
    reDateTodo.textContent = 'change due date';
    reDescribeTodo.addEventListener('click', (todo) => {
        todosMethods.reDateTodo();
    })
    container.appendChild(reDateTodo);

    const rePrioritiseTodo = document.createElement('button');
    rePrioritiseTodo.classList.add('projectsSidebar');
    rePrioritiseTodo.textContent = 'change prioritization';
    rePrioritiseTodo.addEventListener('click', (todo) => {
        todosMethods.rePrioritiseTodo();
    })
    container.appendChild(rePrioritiseTodo);

    const setCompletionTodo = document.createElement('button');
    setCompletionTodo.classList.add('projectsSidebar');
    setCompletionTodo.textContent = 'change completion status';
    setCompletionTodo.addEventListener('click', (todo) => {
        todosMethods.setCompletionTodo();
    })
    container.appendChild(setCompletionTodo);

    const line = document.createElement('div');
    line.setAttribute('id', 'sidebarLine');
    body.appendChild(line);

};

export { createTodosSidebar }