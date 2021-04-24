const createSidebar = () => {

    const content = document.querySelector('div#content');

    const container = document.createElement('div');
    container.setAttribute('id', 'sidebarContainer');
    content.appendChild(container);

    const paragraph = document.createElement('p');
    paragraph.setAttribute('id', 'sidebarParagraph');
    paragraph.textContent = 'add sidebar content here';
    container.appendChild(paragraph);

    const line = document.createElement('div');
    line.setAttribute('id', 'sidebarLine');
    container.appendChild(line);

};

export { createSidebar }