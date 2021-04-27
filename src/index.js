import { objects } from './objects';

import { createHeader } from './header';
import { createDirectory } from './directory-path';
import { createBody } from './body';
import { createProjSidebar } from './projects-sidebar';
import { createProjectsDisplay } from './projects-display';
import { createTodosSidebar } from './todos-sidebar';
import { createTodosDisplay } from './todos-display';


const run = (() => {

    const runProjects = (() => {

        createHeader();
        createDirectory();
        createBody();
        createProjSidebar(objects.projectMethods);
        createProjectsDisplay(objects.projectArray);

    })();

    const runTodos = ((x) => {

        createHeader();
        createDirectory(objects.projectArray[x]);
        createBody();
        createTodosSidebar(objects.todosMethods);
        createTodosDisplay(objects.projectArray[x]);

    })();

    
    

})();















import {  } from 'date-fns';
