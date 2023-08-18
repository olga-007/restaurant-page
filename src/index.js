import './styles.css';

function addNewElement(type, parent, cssClass) {
    const element = document.createElement(type);
    if (cssClass) {
        element.classList.add(cssClass);
    }
    parent.appendChild(element);
    return element;
}

function addNewDiv(parent, cssClass) {
    return addNewElement('div', parent, cssClass);
}

const contentDiv = document.getElementById('content');

const titleBox = addNewDiv(contentDiv, 'box');
const titleDiv = addNewDiv(titleBox, 'title');
titleDiv.textContent = 'Awesome Restaurant';
