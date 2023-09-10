import "./styles.css";
import { addNewDiv } from "./helper";
import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

function switchTab(tabId = "homeTab", renderFn = renderHome) {
  const tabElements = document.getElementsByClassName("tab");
  for (let i = 0; i < tabElements.length; i++) {
    const el = tabElements[i];
    el.classList.remove("active-tab");
    if (el.id === tabId) {
      el.classList.add("active-tab");
    }
  }
  const tabContentEl = document.getElementById("tabContent");
  while (tabContentEl.firstChild) {
    tabContentEl.removeChild(tabContentEl.firstChild);
  }
  renderFn(tabContentEl);
}

function addTab(parent, id, title, renderFn) {
  const tab = addNewDiv(parent, "tab");
  tab.id = id;
  tab.textContent = title;
  tab.addEventListener("click", () => switchTab(id, renderFn));
}

const contentDiv = document.getElementById("content");

const titleBox = addNewDiv(contentDiv, "box");
const titleDiv = addNewDiv(titleBox, "title");
titleDiv.textContent = "Awesome Restaurant";

const mainBox = addNewDiv(contentDiv, "box", "main");

const tabs = addNewDiv(mainBox, "tabs");
addTab(tabs, "homeTab", "Home", renderHome);
addTab(tabs, "menuTab", "Menu", renderMenu);
addTab(tabs, "contactTab", "Contact", renderContact);

const tabContent = addNewDiv(mainBox, "tab-content");
tabContent.id = "tabContent";

const attribution = addNewDiv(contentDiv, "attribution");
attribution.innerHTML =
  'Photo by <a href="https://unsplash.com/@lvnatikk">Lily Banse</a> on <a href="https://unsplash.com/photos/-YHSwy6uqvk">Unsplash</a>';

switchTab();
