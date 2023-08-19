import './styles.css';

import { addNewDiv } from './helper';

const contentDiv = document.getElementById('content');

const titleBox = addNewDiv(contentDiv, 'box');
const titleDiv = addNewDiv(titleBox, 'title');
titleDiv.textContent = 'Awesome Restaurant';

const mainBox = addNewDiv(contentDiv, 'box', 'main');

const tabs = addNewDiv(mainBox, 'tabs');
const homeTab = addNewDiv(tabs, 'tab', 'active-tab');
homeTab.textContent = 'Home';
const menuTab = addNewDiv(tabs, 'tab');
menuTab.textContent = 'Menu';
const contactTab = addNewDiv(tabs, 'tab');
contactTab.textContent = 'Contact';
