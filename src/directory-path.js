const createDirectory = (x,y) => {

    x = x || 0;
    y = y || 0;

    const content = document.querySelector('div#content');

    const container = document.createElement('div');
    container.setAttribute('id', 'directoryContainer');
    content.appendChild(container);

    if ( x == 0 && y == 0 ) {
        const paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'directoryParagraph');
        paragraph.textContent = 'Projects';
        container.appendChild(paragraph);
    } else if ( x != 0) {
        const paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'directoryParagraph');
        paragraph.textContent = `Projects > ${x.name}`;
        container.appendChild(paragraph);
    } else if (y != 0) {
        const paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'directoryParagraph');
        paragraph.textContent = `Projects > ${y.project.name} > ${y.name}`;
        container.appendChild(paragraph);
    }

    const line = document.createElement('div');
    line.setAttribute('id', 'directoryLine');
    container.appendChild(line);

};

export { createDirectory }