import { addNewDiv } from "./helper";

export default function render(parent) {
  const textDiv = addNewDiv(parent, "tab-text");
  textDiv.textContent =
    "Welcome to a culinary haven where the art of cooking and the warmth of hospitality merge seamlessly. Nestled in the heart of the city, our restaurant offers a captivating blend of flavors and ambiance that transport you to a world of delectable delights and timeless charm.";
}
