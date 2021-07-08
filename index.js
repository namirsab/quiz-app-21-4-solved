import { createCardComponent } from "./lib/card.js";
import { data } from "./lib/db.js";

function createCardComponents() {
  const cardComponents = data.map((cardData) => createCardComponent(cardData));
  return cardComponents;
}

function renderCardComponents(cardComponents) {
  const main = document.querySelector("main");

  main.append(...cardComponents);
}

const cardComponents = createCardComponents();
renderCardComponents(cardComponents);
