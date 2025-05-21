const Button = ({ callApi, joke }) => {
  return (
    <button className="btn" onClick={callApi}>
      {joke ? "Next" : "Generate Jokes"}
    </button>
  );
};

export default Button;
