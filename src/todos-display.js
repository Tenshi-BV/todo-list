const createTodosDisplay = (todosMethods, project) => {

    let selected;

    const body = document.querySelector('div#bodyContainer');

    const container = document.createElement('div');
    container.setAttribute('id', 'sidebarContainer');
    body.appendChild(container);

    const createTodo = document.createElement('button');
    createTodo.classList.add('sidebar');
    createTodo.textContent = 'create todo';
    createTodo.addEventListener('click', () => {
        todosMethods.createTodo(project);
        refresh();
    })
    container.appendChild(createTodo);

    const deleteTodo = document.createElement('button');
    deleteTodo.classList.add('sidebar');
    deleteTodo.textContent = 'delete todo';
    deleteTodo.addEventListener('click', () => {
        todosMethods.deleteTodo(project, selected);
        refresh(1);
        selected = 99;
    })
    container.appendChild(deleteTodo);

    const renameTodo = document.createElement('button');
    renameTodo.classList.add('sidebar');
    renameTodo.textContent = 'rename todo';
    renameTodo.addEventListener('click', () => {
        todosMethods.renameTodo(project.todosArray[selected]);
        refresh();
    })
    container.appendChild(renameTodo);

    const rePrioritiseTodo = document.createElement('button');
    rePrioritiseTodo.classList.add('sidebar');
    rePrioritiseTodo.textContent = 'change prioritization';
    rePrioritiseTodo.addEventListener('click', () => {
        todosMethods.rePrioritiseTodo(project.todosArray[selected]);
        refresh();
    })
    container.appendChild(rePrioritiseTodo);

    const setCompletionTodo = document.createElement('button');
    setCompletionTodo.classList.add('sidebar');
    setCompletionTodo.textContent = 'change completion status';
    setCompletionTodo.addEventListener('click', () => {
        todosMethods.setCompletionTodo(project.todosArray[selected]);
        refresh();
    })
    container.appendChild(setCompletionTodo);

    const line = document.createElement('div');
    line.setAttribute('id', 'sidebarLine');
    body.appendChild(line);

    const container2 = document.createElement('div');
    container2.setAttribute('id', 'todosContainer');
    body.appendChild(container2);

    const todoCompletion = (value) => {
        if ( value == 1 ) {
            return "finished"
        } else {
            return "unfinished"
        }
    }

    for ( let i = 0; i < project.todosArray.length; i++) {
        const container = document.createElement('div');
        container.classList.add('todoContainer');
        let todo = project.todosArray[i];
        let pos = todosArray.indexOf(todo);
        container.innerHTML = `<p>${todo.name}</p><p>${todo.dueDate}</p><p>${todo.priority}</p><p>${todoCompletion(todo.completion)}</p>`;
        container.addEventListener('click', () => {
            select(pos);
            container.classList.add('selected');
        })
        container2.appendChild(container);
    }

    const refresh = (x) => {
        x = x || 0;
        container2.innerHTML = '';
        for ( let i = 0; i < project.todosArray.length; i++) {
            const container = document.createElement('div');
            container.classList.add('todoContainer');
            let todo = project.todosArray[i];
            let pos = project.todosArray.indexOf(todo);
            container.innerHTML = `<p>${todo.name}</p><p>${todo.dueDate}</p><p>${todo.priority}</p><p>${todoCompletion(todo.completion)}</p>`;
            if ( i == selected && x == 0 ) {
                container.classList.add('selected');
            }
            container.addEventListener('click', () => {
                select(pos);
                container.classList.add('selected');
            })
            container2.appendChild(container);
        }
    }

    const select = (position) => {
        selected = position;
        const todos = document.querySelectorAll('#todosContainer>div');
        todos.forEach((div) => {
            div.classList.remove('selected');
        })
    }

};

export { createTodosDisplay }