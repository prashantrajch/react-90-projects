import React, { useState } from "react";
import Button from "../Button";

const categoriesImg = {
  Programming: <img src="./programming.png" alt="programming" />,
  Misc: <img src="./misc.png" alt="misc" />,
  Dark: <img src="./dark.png" alt="dark" />,
  Pun: <img src="./pun.png" alt="pun" />,
  Spooky: <img src="./spooky.png" alt="spooky" />,
  Christmas: <img src="./christmas.png" alt="christmas" />,
};

const Jokes = () => {
  const [joke, setJoke] = useState();

  const handleJokeApi = async () => {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=twopart"
    );
    const data = await res.json();
    setJoke(data);
  };

  return (
    <div className="container">
      {joke && (
        <div className="card">
          <h1>Joke of the day</h1>
          <div className="category">{joke?.category}</div>
          <h3>{joke?.setup} </h3>
          <div className="icon">{categoriesImg[joke?.category]}</div>
          <div className="divider">
            <hr />
            <span>Back</span>
          </div>
          <img src="./happy.png" alt="Happy" />
          <p className="answer">{joke?.delivery}</p>
        </div>
      )}
      <Button joke={joke} callApi={handleJokeApi} />
    </div>
  );
};

export default Jokes;
