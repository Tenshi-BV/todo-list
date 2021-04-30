const createTodoDisplay = (todosMethods, todo) => {

    const body = document.querySelector('div#bodyContainer');

    const container = document.createElement('div');
    container.setAttribute('id', 'sidebarContainer');
    body.appendChild(container);

    const renameTodo = document.createElement('button');
    renameTodo.classList.add('sidebar');
    renameTodo.textContent = 'rename todo';
    renameTodo.addEventListener('click', () => {
        todosMethods.renameTodo(todo);
        refresh();
    })
    container.appendChild(renameTodo);

    const reDescribeTodo = document.createElement('button');
    reDescribeTodo.classList.add('sidebar');
    reDescribeTodo.textContent = 'change description';
    reDescribeTodo.addEventListener('click', () => {
        todosMethods.reDescribeTodo(todo);
        refresh();
    })
    container.appendChild(reDescribeTodo);

    const reDateTodo = document.createElement('button');
    reDateTodo.classList.add('sidebar');
    reDateTodo.textContent = 'change due date';
    reDateTodo.addEventListener('click', () => {
        todosMethods.reDateTodo(todo);
        refresh();
    })
    container.appendChild(reDateTodo);

    const rePrioritiseTodo = document.createElement('button');
    rePrioritiseTodo.classList.add('sidebar');
    rePrioritiseTodo.textContent = 'change prioritization';
    rePrioritiseTodo.addEventListener('click', () => {
        todosMethods.rePrioritiseTodo(todo);
        refresh();
    })
    container.appendChild(rePrioritiseTodo);

    const setCompletionTodo = document.createElement('button');
    setCompletionTodo.classList.add('sidebar');
    setCompletionTodo.textContent = 'change completion status';
    setCompletionTodo.addEventListener('click', () => {
        todosMethods.setCompletionTodo(todo);
        refresh();
    })
    container.appendChild(setCompletionTodo);

    const line = document.createElement('div');
    line.setAttribute('id', 'sidebarLine');
    body.appendChild(line);

    const container2 = document.createElement('div');
    container2.setAttribute('id', 'todoContainer');
    body.appendChild(container2);

    const name = document.createElement('h2');
    name.setAttribute('id', 'todoName');
    name.textContent = todo.name;
    container2.appendChild(name);

    const projectName = document.createElement('p');
    projectName.setAttribute('id', 'todoProjectName');
    projectName.textContent = todo.project.name;
    container2.appendChild(projectName);

    const description = document.createElement('p');
    description.setAttribute('id', 'todoDescription');
    description.textContent = `Discription: ${todo.description}`;
    container2.appendChild(description);

    const creationDate = document.createElement('p');
    creationDate.setAttribute('id', 'todoCreationDate');
    creationDate.textContent = `Date created: ${todo.creaton.getDate()}.${Number(todo.creaton.getMonth()) + 1}.${todo.creaton.getFullYear()}`;
    container2.appendChild(creationDate);

    const dueDate = document.createElement('p');
    dueDate.setAttribute('id', 'todoDueDate');
    dueDate.textContent = `Due date: ${todo.dueDate}`;
    container2.appendChild(dueDate);

    const priority = document.createElement('p');
    priority.setAttribute('id', 'todoPriority');
    priority.textContent = `Priority: ${todo.priority}`;
    container2.appendChild(priority);

    const todoCompletion = (value) => {
        if ( value == 1 ) {
            return "finished"
        } else {
            return "unfinished"
        }
    }

    const completion = document.createElement('p');
    completion.setAttribute('id', 'todoCompletion');
    completion.textContent = todoCompletion(todo.completion);
    container2.appendChild(completion);

    const refresh = () => {

        container2.innerHTML = '';

        const name = document.createElement('h2');
        name.setAttribute('id', 'todoName');
        name.textContent = todo.name;
        container2.appendChild(name);

        const projectName = document.createElement('p');
        projectName.setAttribute('id', 'todoProjectName');
        projectName.textContent = todo.project.name;
        container2.appendChild(projectName);

        const description = document.createElement('p');
        description.setAttribute('id', 'todoDescription');
        description.textContent = `Discription: ${todo.description}`;
        container2.appendChild(description);

        const creationDate = document.createElement('p');
        creationDate.setAttribute('id', 'todoCreationDate');
        creationDate.textContent = `Date created: ${todo.creaton.getDate()}.${Number(todo.creaton.getMonth()) + 1}.${todo.creaton.getFullYear()}`;
        container2.appendChild(creationDate);

        const dueDate = document.createElement('p');
        dueDate.setAttribute('id', 'todoDueDate');
        dueDate.textContent = `Due date: ${todo.dueDate}`;
        container2.appendChild(dueDate);

        const priority = document.createElement('p');
        priority.setAttribute('id', 'todoPriority');
        priority.textContent = `Priority: ${todo.priority}`;
        container2.appendChild(priority);

        const todoCompletion = (value) => {
            if ( value == 1 ) {
                return "finished"
            } else {
                return "unfinished"
            }
        }

        const completion = document.createElement('p');
        completion.setAttribute('id', 'todoCompletion');
        completion.textContent = todoCompletion(todo.completion);
        container2.appendChild(completion);

        

    }

};

export { createTodoDisplay }