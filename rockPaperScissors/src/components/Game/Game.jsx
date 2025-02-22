import { useState } from "react";
import "./Game.css";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";

const Game = () => {
  const buttons = [
    {
      id: 1,
      name: "rock",
    },
    {
      id: 2,
      name: "paper",
    },
    {
      id: 3,
      name: "scissor",
    },
  ];

  const icons = {
    rock: <FaHandRock />,
    paper: <FaHandPaper />,
    scissor: <FaHandScissors />,
  };

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState({
    player: 0,
    computer: 0,
  });
  const [msg, setMsg] = useState("");

  function handleBtnClick(value) {
    setPlayerChoice(value);
    computerChoose(value);
  }

  function computerChoose(player) {
    let count = 0;
    let interval = setInterval(() => {
      if (count > 2) {
        count = 0;
      }
      setComputerChoice(Object.keys(icons)[count]);
      count++;
    }, 200);

    setTimeout(() => {
      const choice =
        Object.keys(icons)[Math.floor(Math.random() * buttons.length)];
      setComputerChoice(choice);
      clearInterval(interval);
      checkWinner(player, choice);
    }, 2000);
  }

  function checkWinner(playerChoice, computerChoice) {
    setMsg("");

    if (!playerChoice || !computerChoice) return;

    if (playerChoice === computerChoice) {
      setMsg("Draw");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissor") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissor" && computerChoice === "paper")
    ) {
      setMsg("Player won");
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
    } else {
      setMsg("Computer won");
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }
  }

  function handleReset() {
    setPlayerChoice("");
    setComputerChoice("");
    setScore({
      player: 0,
      computer: 0,
    });
    setMsg("");
  }
  function handleReplay() {
    setPlayerChoice("");
    setComputerChoice("");
    setMsg("");
  }

  return (
    <div className="container">
      <h1 className="heading">Welcome to Rock, Paper, Scissors Game</h1>
      <section className="game-section">
        <div className="player card">
          <aside>
            <p className="score">Score: {score.player}</p>
          </aside>
          <h3>Player</h3>
          <div className="showBox">{playerChoice && icons[playerChoice]}</div>
          <div className="choose-section">
            {buttons.map((btn) => (
              <button
                key={btn.id}
                className="btn"
                onClick={() => handleBtnClick(btn.name)}
                disabled={playerChoice ? true : false}
              >
                {playerChoice ? (
                  <div
                    className={`box ${
                      playerChoice === btn.name ? "active" : "unactive"
                    }`}
                  >
                    {icons[btn.name]}
                  </div>
                ) : (
                  <div className="box hover">{icons[btn.name]}</div>
                )}
                <span>{btn.name}</span>
              </button>
            ))}
          </div>
        </div>
        <hr className="hr" />
        <div className="computer card">
          <aside>
            <p className="score">Score: {score.computer}</p>
          </aside>
          <h3>Computer</h3>
          <div className="showBox">
            {computerChoice && icons[computerChoice]}
          </div>
        </div>
      </section>
      <p className={`msg-box ${msg ? msg.toLowerCase().split(" ")[0] : ""}`}>
        {msg && `${msg} the match`}
      </p>
      <div className="btns">
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>
        <button className="btn replay" onClick={handleReplay}>
          Replay
        </button>
      </div>
    </div>
  );
};

export default Game;
