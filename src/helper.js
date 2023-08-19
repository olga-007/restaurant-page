export function addNewElement(type, parent, ...cssClasses) {
    const element = document.createElement(type);
    if (cssClasses) {
        element.classList.add(...cssClasses);
    }
    parent.appendChild(element);
    return element;
}

export function addNewDiv(parent, ...cssClasses) {
    return addNewElement('div', parent, ...cssClasses);
}
