import { addNewDiv, addNewElement } from "./helper";

export default function render(parent) {
  const textDiv = addNewDiv(parent, "tab-text");

  const p1 = addNewElement("p", textDiv);
  p1.textContent =
    "Indulge in our carefully curated menu, a harmonious blend of classic favorites and inventive creations. From hearty farmhouse soups to artisanal wood-fired pizzas, each dish tells a story of tradition and innovation.";

  const p2 = addNewElement("p", textDiv);
  p2.textContent = 'Not sure what to choose? Say: "Surprise me!"';
}
