import { useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";

const lists = [
  {
    key: "rock",
    name: "rock",
    icon: <FaHandRock />,
  },
  {
    key: "paper",
    name: "paper",
    icon: <FaHandPaper />,
  },
  {
    key: "scissors",
    name: "scissors",
    icon: <FaHandScissors />,
  },
];

const gameName = ["rock", "paper", "scissors"];

const GameComponent = () => {
  const [playerValue, setPlayerValue] = useState("");
  const [computerValue, setComputerValue] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handlePlayerClick = (value) => {
    const player = value;
    const computer = gameName[getRandomNumber()];
    setPlayerValue(player);
    setComputerValue(computer);
    compareValue(player, computer);
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * gameName.length);
  };

  const compareValue = (player, computer) => {
    if (player === computer) {
      alert("The result is a tie!");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setPlayerScore((prev) => prev + 1);
    } else {
      setComputerScore((prev) => prev + 1);
    }
  };
  console.log(playerValue);

  return (
    <div className="container">
      <h1>Welcome to Rock, Paper, Scissors Game</h1>
      <div className="btns">
        {lists.map((elm) => (
          <button
            key={elm.key}
            onClick={() => handlePlayerClick(elm.name)}
            className={!!(elm.name === playerValue) && "active"}
          >
            <span className="icon">{elm.icon}</span>
            <span className="name">{elm.name}</span>
          </button>
        ))}
      </div>
      <h3>
        Your choice: <span className="choice">{playerValue}</span>
      </h3>
      <h3>
        Computer choice: <span className="choice">{computerValue}</span>
      </h3>
      <h2>Your Score: {playerScore}</h2>
      <h2>Computer Score: {computerScore}</h2>
    </div>
  );
};

export default GameComponent;
