import React from "react";

const Die = ({ transform, active }) => {
  return (
    <div className={`diceWrapper ${active ? "jump" : ""}`}>
      <div className="diceBox" style={{ transform }}>
        <div className="diceface front">
          <span className="dot"></span>
        </div>
        <div className="diceface bottom">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="diceface back">
          <div>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="diceface left">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="diceface right">
          <div>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <span className="dot"></span>
          <div>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="diceface top">
          <div>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Die;
