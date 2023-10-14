/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const suit = randomSuit();
    card.classList.add(suit);
    card.querySelector(".top").textContent = getSuitSymbol(suit);
    card.querySelector(".bottom").textContent = getSuitSymbol(suit);
    card.querySelector(".number").textContent = randomNumber();
  });
};

let randomNumber = () => {
  let numbers = [
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
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let randomSuit = () => {
  let suits = ["spade", "diamond", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suits.length);

  return suits[indexSuit];
};

let getSuitSymbol = suit => {
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
