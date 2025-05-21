const AdvanceForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    console.log(formData);

    // This is second of formData use.
    const formDataSecond = new FormData(e.target);
    const form = {
      fname: formDataSecond.get("fname"),
      lname: formDataSecond.get("lname"),
      email: formDataSecond.get("email"),
      password: formDataSecond.get("password"),
    };
    console.log(form);
    // you get check every field is not blank

    // now call api to send the data
  };

  return (
    <div className="container">
      <h1 className="title">Advance Form</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="inputfield">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter you first name"
            />
          </div>
          <div className="inputfield">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              name="lname"
              id="lname"
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
              placeholder="example@gmail.com"
            />
          </div>
          <div className="inputfield">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="row">
          <div className="inputfield">
            <label htmlFor="dob">DOB:</label>
            <input type="date" name="dob" id="dob" />
          </div>
          <div className="inputfield">
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" min={0} max={120} />
          </div>
        </div>
        <div className="row">
          <div className="inputfield">
            <label htmlFor="phone">Phone:</label>
            <input type="number" name="phone" id="phone" min={0} max={120} />
          </div>
          <div className="inputfield">
            <label htmlFor="gender">Gender:</label>
            <div className="genderRow">
              <div className="radioInput">
                <input type="radio" name="gender" id="male" value={"male"} />
                <label htmlFor="male">Male</label>
              </div>
              <div className="radioInput">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value={"female"}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="radioInput">
                <input type="radio" name="gender" id="other" value={"other"} />
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
              />
              <label htmlFor="coding">Coding</label>
            </div>
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="reading"
                value={"Reading"}
              />
              <label htmlFor="reading">Reading</label>
            </div>
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="writing"
                value={"Writing"}
              />
              <label htmlFor="writing">Writing</label>
            </div>
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="coffee"
                value={"Coffee"}
              />
              <label htmlFor="coffee">Coffee</label>
            </div>
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="gaming"
                value={"Gaming"}
              />
              <label htmlFor="gaming">Gaming</label>
            </div>
            <div className="checkboxfield">
              <input
                type="checkbox"
                name="interests"
                id="debugging"
                value={"Debugging"}
              />
              <label htmlFor="debugging">Debugging</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inputfield">
            <label htmlFor="country">Country:</label>
            <select name="country" id="country">
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="nepal">Nepal</option>
              <option value="bhutan">Bhutan</option>
            </select>
          </div>
          <div className="inputfield">
            <label htmlFor="color">Fav Color:</label>
            <input type="color" name="color" id="color" />
          </div>
        </div>
        <div className="inputfield">
          <label htmlFor="file">File:</label>
          <input type="file" name="file" id="file" />
        </div>
        <div className="inputfield">
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" rows={4}></textarea>
        </div>
        <div className="inputfield">
          <label htmlFor="satisfaction">Safaction Level:</label>
          <input
            type="range"
            name="satisfaction"
            id="satisfaction"
            min={0}
            max={100}
          />
        </div>
        <div className="btns">
          <input type="reset" value="Reset" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AdvanceForm;
