import React, { useState } from "react";
import Board from "./components/Board";
import Winner from "./components/Winner";
import calculateWinner from "./functions/calculateWinner";

import "./App.css";

const dataArray = [["", "", ""], ["", "", ""], ["", "", ""]];

export default function App() {
  const [data, setData] = useState(dataArray);
  const [round, setRound] = useState(true);
  const [isWinner, setIsWinner] = useState(null);
  const [winnerCoordinates, setWinnerCoordinates] = useState(null);

  const handleClick = (iRow, iData) => {
    if (!isWinner) {
      if (data[iRow][iData] === "") {
        const turn = round ? "X" : "O";
        const copyRow = [
          ...data[iRow].slice(0, iData),
          turn,
          ...data[iRow].slice(iData + 1)
        ];
        const copyData = [
          ...data.slice(0, iRow),
          copyRow,
          ...data.slice(iRow + 1)
        ];
        setRound(!round);
        setData(copyData);
        const result = calculateWinner(copyData);
        setIsWinner(result.win);
        setWinnerCoordinates(result.coordinates);
      }
    }
  };

  return (
    <div>
      <table className="game-board">
        <Board
          data={data}
          onClick={handleClick}
          winnerCoordinates={winnerCoordinates}
        />
      </table>
      {isWinner && <Winner isWinner={isWinner} />}
    </div>
  );
}

// quien gano y colorear las celdas que completaron el triky y
//cuando se acaba el jeugo no se peude dar click en ninguna celda;
