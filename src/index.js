import './styles.css';

import { addNewDiv } from './helper';

function switchTab(tabId) {
    const tabElements = document.getElementsByClassName('tab');
    for (let i = 0; i < tabElements.length; i++) {
        const el = tabElements[i];
        el.classList.remove('active-tab');
        if (el.id === tabId) {
            el.classList.add('active-tab');
        }
    }
}

function addTab(parent, id, title) {
    const tab = addNewDiv(parent, 'tab');
    tab.id = id;
    tab.textContent = title;
    tab.addEventListener('click', () => switchTab(id));
}

const contentDiv = document.getElementById('content');

const titleBox = addNewDiv(contentDiv, 'box');
const titleDiv = addNewDiv(titleBox, 'title');
titleDiv.textContent = 'Awesome Restaurant';

const mainBox = addNewDiv(contentDiv, 'box', 'main');

const tabs = addNewDiv(mainBox, 'tabs');
addTab(tabs, 'homeTab', 'Home');
addTab(tabs, 'menuTab', 'Menu');
addTab(tabs, 'contactTab', 'Contact');

// activate Home tab by default
switchTab('homeTab');
