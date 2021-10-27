import React from "react";
import Deck from "./Deck";

//need to import Deck into the div decks
//create hooks of the state and store
//need to establish the state of the deck of cards

const Table = () => {
  return (
    <div className="table">
      <div className="players-well-container">
        <div className="well-labels-container">
          <div className="well-labels">
            <h2>Computer</h2>
          </div>
          <div className="well-labels">
            <h2>Player</h2>
          </div>
        </div>
        <div className="wells">
          <Deck />
        </div>
      </div>
    </div>
  );
};

export default Table;
