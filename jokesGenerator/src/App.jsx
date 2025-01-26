import { useEffect, useRef, useState } from "react";
import { FaRegCopy, FaShare } from "react-icons/fa";

const BASE_URL = "https://icanhazdadjoke.com/";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const textRef = useRef(null);

  async function getJokesFetch() {
    setLoading(true);
    try {
      const res = await fetch(BASE_URL, {
        headers: {
          Accept: "Application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (data) {
        setMessage(data);
        setLoading(false);
        return;
      }
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  }

  const generateJokes = () => {
    getJokesFetch();
  };

  const handleCopy = () => {
   navigator.clipboard.writeText(message.joke);
   alert('This jokes will be copied..!')
  };

  return (
    <div className="container">
      <h1>Jokes Generator</h1>
      <div className="box">
        {loading ? (
          <div className="loading">
            loading
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <p className="text" ref={textRef}>
            {message.joke || "Please Generate the jokes..."}
          </p>
        )}
      </div>
      <div className="btns">
        <button className="icon-btn">
          <FaShare />
        </button>
        <button className="btn" onClick={generateJokes}>
          Generate Jokes
        </button>
        <button className="icon-btn" onClick={handleCopy}>
          <FaRegCopy />
        </button>
      </div>
    </div>
  );
};

export default App;
