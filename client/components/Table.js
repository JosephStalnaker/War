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
          <div className="decks-container">
            <Deck />
          </div>
        </div>
        <div className="deal-button-container">
          <div>
            <button type="submit">Deal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
