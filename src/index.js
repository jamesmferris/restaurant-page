import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function setActiveButton(buttonId) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.classList.remove("active"));
  document.getElementById(buttonId).classList.add("active");
}

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function loadTab(tabFunction, buttonId) {
  clearContent();
  const content = document.getElementById("content");
  content.appendChild(tabFunction());
  setActiveButton(buttonId);
}

// Initial load
loadTab(loadHome, "home-btn");

// Event listeners for tab switching
document.getElementById("home-btn").addEventListener("click", () => loadTab(loadHome, "home-btn"));
document.getElementById("menu-btn").addEventListener("click", () => loadTab(loadMenu, "menu-btn"));
document.getElementById("about-btn").addEventListener("click", () => loadTab(loadContact, "about-btn"));
