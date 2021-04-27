const createDirectory = (x) => {

    x = x || 0;

    const content = document.querySelector('div#content');

    const container = document.createElement('div');
    container.setAttribute('id', 'directoryContainer');
    content.appendChild(container);

    if ( x == 0 ) {
        const paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'directoryParagraph');
        paragraph.textContent = 'projects';
        container.appendChild(paragraph);
    }

    if ( x != 0) {
        const paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'directoryParagraph');
        paragraph.textContent = `projects > ${x.name}`;
        container.appendChild(paragraph);
    }

    const line = document.createElement('div');
    line.setAttribute('id', 'directoryLine');
    container.appendChild(line);

};

export { createDirectory }