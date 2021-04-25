const createBody = () => {

    const content = document.querySelector('div#content');

    const container = document.createElement('div');
    container.setAttribute('id', 'bodyContainer');
    content.appendChild(container);

};

export { createBody }