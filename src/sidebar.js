const createSidebar = () => {

    const body = document.querySelector('div#bodyContainer');

    const container = document.createElement('div');
    container.setAttribute('id', 'sidebarContainer');
    body.appendChild(container);

    const paragraph = document.createElement('p');
    paragraph.setAttribute('id', 'sidebarParagraph');
    paragraph.textContent = 'add sidebar content here';
    container.appendChild(paragraph);

    const line = document.createElement('div');
    line.setAttribute('id', 'sidebarLine');
    container.appendChild(line);

};

export { createSidebar }