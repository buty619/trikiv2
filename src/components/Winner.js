import React from "react";
import "../App.css";

export default function Winner({ isWinner }) {
  return (
    <div className="myModal">
        <div className="modalCenterV">
            <h1 className="winMessage">{isWinner} is the winner </h1>
        </div>      
    </div>
  );
}