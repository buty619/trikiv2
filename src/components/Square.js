import React from "react";
import "../App.css";

export default function Square({
  row,
  iRow,
  onClick: handleClick,
  winnerCoordinates
}) {
  const isOneOfTheWinners = (winnerCoordinates, iRow, iData) => {
    if (winnerCoordinates) {
      return winnerCoordinates.some(coordinate =>
        [iRow, iData].every((value, i) => value === coordinate[i])
      );
    }
    return null;
  };

  return (
    <tr>
      {row.map((data, iData) => (
        <td
          onClick={() => handleClick(iData)}
          key={iData}
          className={ 
            isOneOfTheWinners(winnerCoordinates, iRow, iData) ? "win" : null
          }
          
        >
          {data}
        </td>
      ))}
    </tr>
  );
}
