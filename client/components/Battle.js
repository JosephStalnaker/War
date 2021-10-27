import React, { useEffect, useState } from "react";

let deckOfCards = {
  1: ["D", "2", 2],
  2: ["C", "2", 2],
  3: ["H", "2", 2],
  4: ["S", "2", 2],
  5: ["D", "3", 3],
  6: ["C", "3", 3],
  7: ["H", "3", 3],
  8: ["S", "3", 3],
  9: ["D", "4", 4],
  10: ["C", "4", 4],
  11: ["H", "4", 4],
  12: ["S", "4", 4],
  13: ["D", "5", 5],
  14: ["C", "5", 5],
  15: ["H", "5", 5],
  16: ["S", "5", 5],
  17: ["D", "6", 6],
  18: ["C", "6", 6],
  19: ["H", "6", 6],
  20: ["S", "6", 6],
  21: ["D", "7", 7],
  22: ["C", "7", 7],
  23: ["H", "7", 7],
  24: ["S", "7", 7],
  25: ["D", "8", 8],
  26: ["C", "8", 8],
  27: ["H", "8", 8],
  28: ["S", "8", 8],
  29: ["D", "9", 9],
  30: ["C", "9", 9],
  31: ["H", "9", 9],
  32: ["S", "9", 9],
  33: ["D", "10", 10],
  34: ["C", "10", 10],
  35: ["H", "10", 10],
  36: ["S", "10", 10],
  37: ["D", "J", 11],
  38: ["C", "J", 11],
  39: ["H", "J", 11],
  40: ["S", "J", 11],
  41: ["D", "Q", 12],
  42: ["C", "Q", 12],
  43: ["H", "Q", 12],
  44: ["S", "Q", 12],
  45: ["D", "K", 13],
  46: ["C", "K", 13],
  47: ["H", "K", 13],
  48: ["S", "K", 13],
  49: ["D", "A", 14],
  50: ["C", "A", 14],
  51: ["H", "A", 14],
  52: ["S", "A", 14],
};

const Battle = (props) => {
  const [playerCard, setPlayerCard] = useState("");
  const [computerCard, setComputerCard] = useState("");
  const [playerTempDeck, setPlayerTempDeck] = useState([]);
  const [computerTempDeck, setComputerTempDeck] = useState([]);
  const [computerWarDeck, setComputerWarDeck] = useState([]);
  const [playerWarDeck, setPlayerWarDeck] = useState([]);
  const [computerDeck, setComputerDeck] = useState(props.computerDeck);
  const [playerDeck, setPlayerDeck] = useState(props.playerDeck);

  const handleBattleClick = (event) => {
    event.preventDefault();
    playHand(event);
    console.log("inside");
  };

  const playHand = () => {
    setComputerCard(props.computerDeck[props.computerDeck.length - 1]);
    setPlayerCard(props.playerDeck[props.playerDeck.length - 1]);

    if (props.computerDeck.length && props.playerDeck.length) {
      if (deckOfCards[computerCard][2] > deckOfCards[playerCard][2]) {
        setComputerTempDeck([...computerTempDeck, computerCard]);
        setComputerTempDeck([...computerTempDeck, playerCard]);
        props.computerDeck.pop();
        props.playerDeck.pop();
      }
      if (deckOfCards[playerCard][2] > deckOfCards[computerCard][2]) {
        setPlayerTempDeck([...playerTempDeck, playerCard]);
        setPlayerTempDeck([...playerTempDeck, computerCard]);
        props.computerDeck.pop();
        props.playerDeck.pop();
      }
      if (props.computerDeck.length === 0) {
        setComputerDeck([computerDeck, ...computerTempDeck]);
        setComputerTempDeck([]);
      }
      if (props.playerDeck.length === 0) {
        setPlayerDeck([playerDeck, ...playerTempDeck]);
        setPlayerTempDeck([]);
      }
      if (
        deckOfCards[playerCard][2] === deckOfCards[computerCard][2] &&
        props.computerDeck.length >= 4 &&
        props.playerDeck.length >= 4
      ) {
        setComputerWarDeck(
          ...computerWarDeck,
          props.computerDeck.slice(
            props.computerDeck.length - 4,
            props.computerDeck.length
          )
        );
        setPlayerWarDeck([
          ...playerWarDeck,
          props.playerDeck.slice(
            props.playerDeck.length - 4,
            props.playerDeck.length
          ),
        ]);
        setComputerWarDeck([]);
        setPlayerWarDeck([]);
      }
      if (
        deckOfCards[playerCard][2] === deckOfCards[computerCard][2] &&
        props.computerDeck.length < 4 &&
        props.playerDeck.length >= 4
      ) {
        setComputerWarDeck(
          ...computerWarDeck,
          props.computerDeck.slice(0, props.computerDeck.length)
        );
        setPlayerWarDeck([
          ...playerWarDeck,
          props.playerDeck.slice(
            props.playerDeck.length - 4,
            props.playerDeck.length
          ),
        ]);
        setComputerWarDeck([]);
        setPlayerWarDeck([]);
      }
      if (
        deckOfCards[playerCard][2] === deckOfCards[computerCard][2] &&
        props.computerDeck.length >= 4 &&
        props.playerDeck.length < 4
      ) {
        setComputerWarDeck(
          ...computerWarDeck,
          props.computerDeck.slice(
            props.computerDeck.length - 4,
            props.computerDeck.length
          )
        );
        setPlayerWarDeck([
          ...playerWarDeck,
          props.playerDeck.slice(0, props.playerDeck.length),
        ]);
        setComputerWarDeck([]);
        setPlayerWarDeck([]);
      }
      //if the main array is empty and the holding is full reverse teh action and repeat until both
      //if both array links are 0 then teh game is over then populate the component of the winner and update the scores in the database
      console.log("comp", props.computerDeck, computerTempDeck);
      console.log("player", props.playerDeck, playerTempDeck);
    } else if (!props.computerDeck.length && computerTempDeck.length) {
      console.log("Player Wins");
    } else if (!props.playerDeck.length && playerTempDeck.length) {
      console.log("Computer Wins");
    }
  };

  //   console.log(deckOfCards[playerCard][2], deckOfCards[computerCard][2]);

  return (
    <>
      <div className="battle-container">
        <div className="battle-computer">
          <div>
            {deckOfCards[computerCard]
              ? deckOfCards[computerCard][2]
              : "there's nothing here"}
          </div>
        </div>
        <div className="battle-player">
          <div>
            {deckOfCards[playerCard]
              ? deckOfCards[playerCard][2]
              : "there's nothing here"}
          </div>
        </div>
        <div>
          <button onClick={handleBattleClick} type="submit">
            Battle
          </button>
        </div>
      </div>
    </>
  );
};

// console.log("comp", playerDeck, computerTempDeck);
// console.log("player", computerDeck, playerTempDeck);

export default Battle;

// //when deal is pressed
// //component will pop the last element from the computerDeck and the playerDeck

// //render the card played using bracket notation and retrieving from the deck object the appropriate card
// //<div>{deckOfCards[computerCardPlayed][val][val]}</div>

// let computerCardPlayed = computerDeck[computerDeck.length - 1];
// let playerCardPlayed = playerDeck[playerDeck.length - 1];
// let computerTempDeck = [];
// let playerTempDeck = [];

// console.log("comp", playerDeck, computerTempDeck);
// console.log("player", computerDeck, playerTempDeck);

// function battle(card1, card2) {
//   while (computerDeck.length || playerDeck.length) {
//     if (deckOfCards[computerCardPlayed][2] > deckOfCards[playerCardPlayed][2]) {
//       computerTempDeck.push(computerCardPlayed);
//       computerTempDeck.push(playerCardPlayed);
//       computerDeck.pop();
//       playerDeck.pop();
//     }
//     if (deckOfCards[playerCardPlayed][2] > deckOfCards[computerCardPlayed][2]) {
//       playerTempDeck.push(playerCardPlayed);
//       playerTempDeck.push(computerCardPlayed);
//       computerDeck.pop();
//       playerDeck.pop();
//     }
//     //if the main array is empty and the holding is full reverse teh action and repeat until both
//     //if both array links are 0 then teh game is over then populate the component of the winner and update the scores in the database
//     console.log("comp", computerDeck, computerTempDeck);
//     console.log("player", playerDeck, playerTempDeck);
//   }
// }
// battle(computerCardPlayed, playerCardPlayed);
