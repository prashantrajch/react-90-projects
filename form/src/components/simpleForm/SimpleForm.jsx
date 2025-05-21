import React, { useState } from "react";

const SimpleForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [intersets, setIntersets] = useState([]);
  const [country, setCountry] = useState("");
  const [color, setColor] = useState("#000000");
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");
  const [satisfaction, setSatisfaction] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fname,
      lname,
      email,
      password,
      dob,
      age,
      phoneNumber,
      gender,
      intersets,
      country,
      color,
      file,
      message,
      satisfaction,
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setIntersets((prev) => [...prev, value]);
    } else {
      setIntersets(intersets.filter((e) => e !== value));
    }
  };

  console.log("this simpleForm is re-render");

  return (
    <div className="container">
      <h1 className="title">Simple Form</h1>
      <form action="">
        <div className="row">
          <div className="inputfield">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              name="fname"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Enter you first name"
            />
          </div>
          <div className="inputfield">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              name="lname"
              id="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Enter you last name"
            />
          </div>
        </div>
        <div className="row">
          <div className="inputfield">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="inputfield">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="row">
          <div className="inputfield">
            <label htmlFor="dob">DOB:</label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="inputfield">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              id="age"
              min={0}
              max={120}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="inputfield">
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              min={0}
              max={120}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="inputfield">
            <label htmlFor="gender">Gender:</label>
            <div className="genderRow">
              <div className="radioInput">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="radioInput">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="radioInput">
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  checked={gender === "other"}
                  onChange={() => setGender("other")}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
        </div>
        <div className="inputfield">
          <label htmlFor="interests">Interests:</label>
          <div className="checkboxContainer">
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="coding"
                value={"Coding"}
                onChange={handleCheckbox}
              />
              <label htmlFor="coding">Coding</label>
            </div>
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="reading"
                value={"Reading"}
                onChange={handleCheckbox}
              />
              <label htmlFor="reading">Reading</label>
            </div>
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="writing"
                value={"Writing"}
                onChange={handleCheckbox}
              />
              <label htmlFor="writing">Writing</label>
            </div>
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="coffee"
                value={"Coffee"}
                onChange={handleCheckbox}
              />
              <label htmlFor="coffee">Coffee</label>
            </div>
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="gaming"
                value={"Gaming"}
                onChange={handleCheckbox}
              />
              <label htmlFor="gaming">Gaming</label>
            </div>
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="debugging"
                value={"Debugging"}
                onChange={handleCheckbox}
              />
              <label htmlFor="debugging">Debugging</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inputfield">
            <label htmlFor="country">Country:</label>
            <select
              name="country"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="nepal">Nepal</option>
              <option value="bhutan">Bhutan</option>
            </select>
          </div>
          <div className="inputfield">
            <label htmlFor="color">Fav Color:</label>
            <input
              type="color"
              name="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="inputfield">
          <label htmlFor="file">File:</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="inputfield">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="inputfield">
          <label htmlFor="satisfaction">Safaction Level:</label>
          <input
            type="range"
            name="satisfaction"
            id="satisfaction"
            min={0}
            max={100}
            value={satisfaction}
            onChange={(e) => setSatisfaction(e.target.value)}
          />
        </div>
        <div className="btns">
          <input type="reset" value="Reset" />
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
