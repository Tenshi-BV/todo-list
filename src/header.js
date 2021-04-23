const createHeader = () => {

const container = document.createElement('div');
container.classList.add('headerContainer');
content.appendChild(container);

const title = document.createElement('h1');
title.classList.add('headerTitle');
container.appendChild(title);

}

export { createHeader }