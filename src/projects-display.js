const createProjectsDisplay = (projectMethods, projectArray) => {

    const body = document.querySelector('div#bodyContainer');

    const container = document.createElement('div');
    container.setAttribute('id', 'sidebarContainer');
    body.appendChild(container);

    const createProject = document.createElement('button');
    createProject.classList.add('sidebar');
    createProject.textContent = 'create project';
    createProject.addEventListener('click', () => {
        projectMethods.createProject();
        refresh();
    })
    container.appendChild(createProject);

    const deleteProject = document.createElement('button');
    deleteProject.classList.add('sidebar');
    deleteProject.textContent = 'delete project';
    deleteProject.addEventListener('click', () => {
        project = selected;
        projectMethods.deleteProject(project);
        refresh();
    });
    container.appendChild(deleteProject);

    const renameProject = document.createElement('button');
    renameProject.classList.add('sidebar');
    renameProject.textContent = 'rename project';
    renameProject.addEventListener('click', () => {
        projectMethods.renameProject(project);
        refresh();
    });
    container.appendChild(renameProject);

    const line = document.createElement('div');
    line.setAttribute('id', 'sidebarLine');
    body.appendChild(line);

    const container2 = document.createElement('div');
    container2.setAttribute('id', 'projectsContainer');
    body.appendChild(container2);

    for ( let i = 0; i < projectArray.length; i++) {
        const container = document.createElement('div');
        container.classList.add('projectContainer');
        let obj = projectArray[i];
        container.textContent = obj.name;
        container.addEventListener('click', (obj) => {
            select(obj);
            container.classList.add('selected');
        })
        container2.appendChild(container);
    }

    const refresh = () => {
        select(none);
        container2.innerHTML = '';
        for ( let i = 0; i < projectArray.length; i++) {
            const container = document.createElement('div');
            container.classList.add('projectContainer');
            let obj = projectArray[i];
            container.textContent = obj.name;
            container.addEventListener('click', (obj) => {
                select(obj);
            })
            container2.appendChild(container);
        }
    }

    let selected = 0;

    const select = (project) => {
        refresh();
        selected = project;
    }

};

export { createProjectsDisplay }