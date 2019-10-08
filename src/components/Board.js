import React from "react";
import Square from "./Square";
import "../App.css";

export default function Board({ data,winnerCoordinates, onClick: handleClick }) {
  return (
    <tbody>
      {data.map((row, iRow) => (
        <Square
          winnerCoordinates={winnerCoordinates}
          row={row}
          iRow={iRow}
          onClick={iDate => handleClick(iRow, iDate)}
          key={iRow}
        />
      ))}
    </tbody>
  );
}
