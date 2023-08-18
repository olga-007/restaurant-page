import './styles.css';

function addNewElement(type, parent, ...cssClasses) {
    const element = document.createElement(type);
    if (cssClasses) {
        element.classList.add(...cssClasses);
    }
    parent.appendChild(element);
    return element;
}

function addNewDiv(parent, ...cssClasses) {
    return addNewElement('div', parent, ...cssClasses);
}

const contentDiv = document.getElementById('content');

const titleBox = addNewDiv(contentDiv, 'box');
const titleDiv = addNewDiv(titleBox, 'title');
titleDiv.textContent = 'Awesome Restaurant';

const mainBox = addNewDiv(contentDiv, 'box', 'main');
mainBox.textContent = 'Main content';
