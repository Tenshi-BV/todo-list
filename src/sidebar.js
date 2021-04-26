const createSidebar = (projectMethods) => {

    console.log(projectMethods);

    const body = document.querySelector('div#bodyContainer');

    const container = document.createElement('div');
    container.setAttribute('id', 'sidebarContainer');
    body.appendChild(container);

    const createProject = document.createElement('button');
    createProject.classList.add('projectsSidebar');
    createProject.textContent = 'create project';
    createProject.addEventListener('click', () => {
        projectMethods.createProject();
    })
    container.appendChild(createProject);

    const deleteProject = document.createElement('button');
    deleteProject.classList.add('projectsSidebar');
    deleteProject.textContent = 'delete project';
    deleteProject.addEventListener('click', () => {alert('not set up')});
    container.appendChild(deleteProject);

    const renameProject = document.createElement('button');
    renameProject.classList.add('projectsSidebar');
    renameProject.textContent = 'rename project';
    container.appendChild(renameProject);

    const line = document.createElement('div');
    line.setAttribute('id', 'sidebarLine');
    body.appendChild(line);

};

export { createSidebar }