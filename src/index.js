import { objects } from './objects';

import { createHeader } from './header';
import { createDirectory } from './directory-path';
import { createBody } from './body';
import { createProjectsDisplay } from './projects-display';
import { createTodosDisplay } from './todos-display';
import { createTodoDisplay } from './todo-display';


const run = (() => {

    const runProjects = (() => {

        createHeader();
        createDirectory(0, 0);
        createBody();
        createProjectsDisplay(objects.projectMethods, objects.projectArray);

    });

    const runTodos = ((x) => {

        createHeader();
        createDirectory(objects.projectArray[x], 0);
        createBody();
        createTodosDisplay(objects.todosMethods, objects.projectArray[x]);

    });

    const runTodo = ((todo) => {

        createHeader();
        createDirectory(0, todo);
        createBody();
        createTodoDisplay(objects.todosMethods, todo);

    });

    objects.todosMethods.createTodo();

    runTodos(0);

    //runTodo(objects.projectArray[0].todosArray[0]);

})();















import {  } from 'date-fns';
