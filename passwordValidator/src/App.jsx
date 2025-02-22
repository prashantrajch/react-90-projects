import { useState } from "react";
import validator from "validator";

const App = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
  });

  const validate = (value) => {
    if (!value) {
      setError({ status: false, msg: "" });
    } else if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError({ status: false, msg: "Is strong Password" });
    } else {
      setError({ status: true, msg: "In not Strong Password" });
    }
  };

  return (
    <div>
      <h1>Checking Password Strenght in ReactJs</h1>
      <div className="card">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={(e) => validate(e.target.value)}
        />
        {error.msg && (
          <span className={error.status ? "err" : "active"}>{error.msg}</span>
        )}
      </div>
    </div>
  );
};

export default App;
