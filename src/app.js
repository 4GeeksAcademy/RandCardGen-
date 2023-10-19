/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  const card = document.querySelector(".card");
  const randomButton = document.querySelector("#random");
  const applyDimensionsButton = document.querySelector("#applyDimensions");
  const widthInput = document.querySelector("#widthInput");
  const heightInput = document.querySelector("#heightInput");

  addNewCard(card);

  randomButton.addEventListener("click", () => {
    addNewCard(card);
  });

  applyDimensionsButton.addEventListener("click", () => {
    const newWidth = widthInput.value + "px";
    const newHeight = heightInput.value + "px";

    card.style.width = newWidth;
    card.style.height = newHeight;
  });

  setInterval(() => {
    const newCard = document.querySelector(".card"); // Get a new card element
    addNewCard(newCard);
  }, 8000);
};
const addNewCard = card => {
  const suit = randomSuit();
  card.className = "card " + suit;

  const topSpan = card.querySelector(".top");
  const bottomSpan = card.querySelector(".bottom");
  const numberSpan = card.querySelector(".number");

  topSpan.textContent = getSuitSymbol(suit);
  bottomSpan.textContent = getSuitSymbol(suit);
  numberSpan.textContent = randomNumber();
};

const randomNumber = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

const randomSuit = () => {
  const suits = ["spade", "diamond", "heart", "club"];
  const indexSuit = Math.floor(Math.random() * suits.length);
  return suits[indexSuit];
};

const getSuitSymbol = suit => {
  if (suit === "spade") {
    return "\u2660";
  } else if (suit === "diamond") {
    return "\u2666";
  } else if (suit === "heart") {
    return "\u2665";
  } else if (suit === "club") {
    return "\u2663";
  }
};
