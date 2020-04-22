import React, { useState } from "react";
import { render } from "react-dom";

import "./style.css";

/*
"Flip the Tic Tacs" Exercise

OBJECTIVES
1) The app is currently broken. Fix the code so the Tic Tac Toe board shows up on the screen.

Here's the API for the useReducer hook. You'll need something similar to get started.
//var [state, dispatch] = useReducer(reducer, startingState);


2) Make the Flip Values button work. It should reverse all the plays. Any X square should flip to O, and O fields should flip to X.

*/

var winningCombos = ["012", "345", "678", "036", "147", "258", "048", "246"];

var initialState = {
  fields: Array(9).fill(false), // start with array of 9 with false filled in
  player1: "x",
  player2: "o",
  currentPlayer: 1
};

function reducer(state, action) {
  switch (action.type) {
    case "HANDLE_PLAY":
      if (state.winner) return state;

      var fields = [...state.fields];
      var piece = state["player" + state.currentPlayer]; //x or o

      fields[action.data.index] = piece;

      return {
        ...state,
        fields: fields,
        currentPlayer: state.currentPlayer === 1 ? 2 : 1 // toggle between player  1 and 2
      };
      
    case "RESET":
      return {
        ...startingState,
        currentPlayer: state.currentPlayer
      };
    default:
      //throw new Error()
      return state;
  }
}

function App() {
  function handleRestart() {
    dispatch({ type: "RESET" });
  }

  function handlePlay(index, e) {
    // fill in the current piece, and switch player
    dispatch({ type: "HANDLE_PLAY", data: { index } });
  }

  var fields = currState.fields.map((item, i) => {
    if (!item) {
      return (
        <div key={i} onClick={handlePlay.bind(this, i)} className="field empty">
          &nbsp;
        </div>
      );
    }

    return (
      <div key={i} className="field">
        {item.toUpperCase()}
      </div>
    );
  });

  return (
    <div>
      <button className="clearButton" onClick={handleRestart}>
        Clear
      </button>
      <button className="clearButton" onClick={}>
        Flip Values
      </button>
      <div className="fieldContainer">{fields}</div>
    </div>
  );
}

render(<App />, document.getElementById("root"));



/*
OBJECTIVES
1) The app is currently broken. Fix the code so the Tic Tac Toe board shows up on the screen.

Here's the API for the useReducer hook. You'll need something similar to get started.
//var [state, dispatch] = useReducer(reducer, startingState);

Hints:
- use "React.useReducer", or add useReducer next to the "useState" import on first line
- ensure the variable names are correct in the useReducer hook function call
- ensure other variable names like "currState" are what they should be


2) Make the Flip Values button work. It should reverse all the plays. Any X square should flip to O, and O fields should flip to X.

Hints:
- Add an event handler for the Flip Values button click and have it dispatch the "FLIP_FIELDS" action.
- Add a new case in the reducer for the "FLIP_FIELDS" action
  - loop over fields and reverse the values when "o" or "x" is present
  - merge the fields into the new state using immutability
  - return state
  */