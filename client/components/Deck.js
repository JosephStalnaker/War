import React from "react";
import Battle from "./Battle";

//object with all cards to shuffle and deal from
//object will have a number that will be used to randomize and shuffle the deck for splitting in two
//the key value will be number: [suit(c, a, d, s), card(string type ace, king, etc...), value(2-14)]

//use shuffle function to create two decks to play from assignning one to computer and to player
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

let deckCount = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
];

let shuffledDeck = shuffle(deckCount);
let computerDeck = shuffledDeck.slice(0, 26);
let computerTempDeck = [];
let playerDeck = shuffledDeck.slice(26, 52);
let playerTempDeck = [];

//set state to have a deck for each
//to play the game pop the card off of the deck and compare wwh wins
//the player who wins takes both cards and they are pushed into temporary decks that will be held until the main deck is empty
//once the main deck is empty the temporary deck becomes the main deck and cards are pop off of it and played cards won are pushed on to the main deck
//if cards match then War is declaredthree cards are placed face down and the fourth card popped is played
//the game is over when main deck and temporary deck no longer have length
const Deck = () => {
  return (
    <div className="decks-container">
      <Battle computerDeck={computerDeck} playerDeck={playerDeck} />
    </div>
  );
};

export default Deck;
