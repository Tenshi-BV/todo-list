import { objects } from './objects';

objects;
//objects.projectMethods.createProject();
//console.log(objects.projectArray);



import { createHeader } from './header';
import { createDirectory } from './directory-path';
import { createBody } from './body';
import { createSidebar } from './sidebar';
import { createProjectsDisplay } from './projects-display';

createHeader();
createDirectory();
createBody();
createSidebar(objects.projectMethods);
createProjectsDisplay(objects.projectArray);









import {  } from 'date-fns';
