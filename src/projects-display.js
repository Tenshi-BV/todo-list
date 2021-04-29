const createProjectsDisplay = (projectMethods, projectArray) => {

    let selected;

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
        projectMethods.deleteProject(selected);
        if ( selected == 0 ) {refresh();}
        else {refresh(1);}
        selected = 99;
    });
    container.appendChild(deleteProject);

    const renameProject = document.createElement('button');
    renameProject.classList.add('sidebar');
    renameProject.textContent = 'rename project';
    renameProject.addEventListener('click', () => {
        projectMethods.renameProject(selected);
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
        let pos = projectArray.indexOf(obj);
        container.textContent = obj.name;
        container.addEventListener('click', () => {
            select(pos);
            container.classList.add('selected');
        })
        container2.appendChild(container);
    }

    const refresh = (x) => {
        x = x || 0;
        container2.innerHTML = '';
        for ( let i = 0; i < projectArray.length; i++) {
            const container = document.createElement('div');
            container.classList.add('projectContainer');
            let obj = projectArray[i];
            let pos = projectArray.indexOf(obj);
            container.textContent = obj.name;
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
        const projects = document.querySelectorAll('#projectsContainer>div');
        projects.forEach((div) => {
            div.classList.remove('selected');
        })
    }

};

export { createProjectsDisplay }