import { addNewDiv } from "./helper";

export default function render(parent) {
  const textDiv = addNewDiv(parent, "tab-text");
  textDiv.textContent = "Contact us at ThisTotallyNotFake@email.com";
}
