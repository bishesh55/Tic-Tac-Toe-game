import React, { useState } from "react";
import Square from "./Square";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-xmark} from '@fortawesome/free-solid-svg-icons';

function Home(index) {
  const [data, setData] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    if (data[index] !== null) {
      return;
    }
    const copyData = [...data];
    copyData[index] = isXTurn ? "X" : "O";
    // data[index]= isXTurn? 'X': 'O'

    setData(copyData);
    setIsXTurn(!isXTurn);
  };
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (data[a] != null && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();
  const refreshGame = () => {
    setData(Array(9).fill(null));
  };
  return (
    <div className="main-box">
      {isWinner ? (
        <>
          <div className="container-announce">

          <div className="announce-section">{isWinner} is the winner of the game</div>
          <div>
          <button
          className="btn-play-again"
          onClick={() => {
              refreshGame();
            }}
            >
            Play again
          </button>
                </div>
                
              </div>
        </>
      ) : (
        <>
          <h4 className="title-it">Player {isXTurn ? "X" : "O"} move now</h4>
          <div className="containing-box">
            <div className="box-row">
              <Square
                onClick={() => {
                  handleClick(0);
                }}
                state={data[0]}
              />
              <Square
                onClick={() => {
                  handleClick(1);
                }}
                state={data[1]}
              />
              <Square
                onClick={() => {
                  handleClick(2);
                }}
                state={data[2]}
              />
            </div>
            <div className="box-row">
              <Square
                onClick={() => {
                  handleClick(3);
                }}
                state={data[3]}
              />
              <Square
                onClick={() => {
                  handleClick(4);
                }}
                state={data[4]}
              />
              <Square
                onClick={() => {
                  handleClick(5);
                }}
                state={data[5]}
              />
            </div>
            <div className="box-row">
              <Square
                onClick={() => {
                  handleClick(6);
                }}
                state={data[6]}
              />
              <Square
                onClick={() => {
                  handleClick(7);
                }}
                state={data[7]}
              />
              <Square
                onClick={() => {
                  handleClick(8);
                }}
                state={data[8]}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
