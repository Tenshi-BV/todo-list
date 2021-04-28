import { objects } from './objects';

import { createHeader } from './header';
import { createDirectory } from './directory-path';
import { createBody } from './body';
import { createProjectsDisplay } from './projects-display';
import { createTodosSidebar } from './todos-sidebar';
import { createTodosDisplay } from './todos-display';
import { createTodoSidebar } from './todo-sidebar';
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
        createTodosSidebar(objects.todosMethods);
        createTodosDisplay(objects.projectArray[x]);

    });

    const runTodo = ((todo) => {

        createHeader();
        createDirectory(0, todo);
        createBody();
        createTodoSidebar(objects.todosMethods);
        createTodoDisplay(todo);

    });

    runProjects();

})();















import {  } from 'date-fns';
