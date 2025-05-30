import { useState } from "react";
import Die from "./Die";

const diceRoundLists = [0, 90, 180, 270, 360];

const RollDice = () => {
  const [transform, setTransform] = useState("");
  const [transform2, setTransform2] = useState("");
  const [active, setActive] = useState(false);

  const diceRolling = () => {
    setActive(true);

    let start = 0;
    let interval = setInterval(() => {
      start += 60;
      if (start >= 360) {
        const x1 = diceRoundLists[generateRandomNumber()];
        const y1 = diceRoundLists[generateRandomNumber()];
        const x2 = diceRoundLists[generateRandomNumber()];
        const y2 = diceRoundLists[generateRandomNumber()];

        setTransform(`rotateX(${x1}deg) rotateY(${y1}deg)`);
        setTransform2(`rotateX(${x2}deg) rotateY(${y2}deg)`);
        setActive(false);
        clearInterval(interval);
      } else {
        setTransform(` rotateX(${start}deg) rotateY(${start}deg)`);
        setTransform2(` rotateX(${start}deg) rotateY(${start}deg)`);
      }
    }, 1000);
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * diceRoundLists.length);
  };

  const handleRollDice = () => {
    diceRolling();
  };

  return (
    <div>
      <div className="die">
        <Die transform={transform} active={active} />
        <Die transform={transform2} active={active} />
      </div>
      <button className="btn" onClick={handleRollDice}>
        Roll Dice
      </button>
    </div>
  );
};

export default RollDice;
