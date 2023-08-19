import { addNewDiv } from './helper';

export default function render(parent) {
    const textDiv = addNewDiv(parent);
    textDiv.textContent = 'Menu content';
}
