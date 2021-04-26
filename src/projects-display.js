const createProjectsDisplay = (projectArray) => {
    
    const body = document.querySelector('div#bodyContainer');

    const container = document.createElement('div');
    container.setAttribute('id', 'projectsContainer');
    body.appendChild(container);

    for ( let i = 0; i < projectArray.length; i++) {
        const container = document.createElement('div');
        container.classList.add('projectContainer');
        let obj = projectArray[i];
        container.textContent = obj.name;
        body.appendChild(container);
    }

};

export { createProjectsDisplay }