const createHeader = () => {

    const content = document.querySelector('div#content');

    const container = document.createElement('div');
    container.setAttribute('id', 'headerContainer');
    content.appendChild(container);
    
    const title = document.createElement('h1');
    title.setAttribute('id', 'headerTitle');
    title.textContent = 'Todo list';
    container.appendChild(title);

    const line = document.createElement('div');
    line.setAttribute('id', 'headerLine');
    container.appendChild(line);

};

export { createHeader }