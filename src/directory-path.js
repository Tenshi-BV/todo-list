const createDirectory = () => {

    const content = document.querySelector('div#content');

    const container = document.createElement('div');
    container.setAttribute('id', 'directoryContainer');
    content.appendChild(container);

    const paragraph = document.createElement('p');
    paragraph.setAttribute('id', 'directoryParagraph');
    paragraph.textContent = 'create directory path here';
    container.appendChild(paragraph);

    const line = document.createElement('div');
    line.setAttribute('id', 'directoryLine');
    container.appendChild(line);

};

export { createDirectory }