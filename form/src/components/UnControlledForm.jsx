import { useState } from "react";
import InputField from "./Input/InputField";
import PasswordInput from "./Input/PasswordInput";
import SelectInput from "./Input/SelectInput";

let data = [
  {
    label: "First Name",
    id: "fName",
    type: "text",
    placeholder: "First Name",
  },
  {
    label: "Middle Name",
    id: "mName",
    type: "text",
    placeholder: "Middle Name",
  },
  {
    label: "Last Name",
    id: "lName",
    type: "text",
    placeholder: "Last Name",
  },
  {
    label: "D.O.B",
    id: "dob",
    type: "date",
  },
  {
    label: "Email",
    id: "email",
    type: "email",
    placeholder: "example@gmail.com",
  },
  {
    label: "Password",
    id: "password",
    type: "password",
  },
  {
    label: "Confirm Password",
    id: "cnfPassword",
    type: "password",
  },
  {
    label: "Pincode",
    id: "pincode",
    type: "number",
    placeholder: "000000",
  },
  {
    label: "Street",
    id: "street",
    type: "text",
    placeholder: "Street/Village Name",
  },
];

const selectData = [
  {
    label: "Country",
    name: "country",
    id: "country",
    options: [
      {
        value: "india",
        text: "India",
      },
    ],
  },
  {
    label: "State",
    name: "state",
    id: "state",
    options: [
      {
        value: "bihar",
        text: "Bihar",
      },
    ],
  },
  {
    label: "City",
    name: "city",
    id: "city",
    options: [
      {
        value: "motihari",
        text: "Motihari",
      },
    ],
  },
];

const UnControlledForm = () => {
  const [error, setError] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    setError({});

    if (!formObj.fName) {
      setError((prev) => ({ ...prev, fName: "First name is required..!" }));
    }
    if (!formObj.mName) {
      setError((prev) => ({ ...prev, mName: "Middle name is required..!" }));
    }
    if (!formObj.lName) {
      setError((prev) => ({ ...prev, lName: "Last name is required..!" }));
    }
    if (!formObj.dob) {
      setError((prev) => ({ ...prev, dob: "Date of birth is required..!" }));
    }
    if (formObj.gender === undefined) {
      setError((prev) => ({ ...prev, gender: "Gender is required..!" }));
    }
    if (!formObj.email) {
      setError((prev) => ({ ...prev, email: "Email is required..!" }));
    }
    if (!formObj.password) {
      setError((prev) => ({ ...prev, password: "Password is required..!" }));
    }
    if (!formObj.cnfPassword) {
      setError((prev) => ({
        ...prev,
        cnfPassword: "Confirm password is required..!",
      }));
    }
    if (formObj.password && formObj.password !== formObj.cnfPassword) {
      setError((prev) => ({
        ...prev,
        cnfPassword: "Password does not matches....!",
      }));
    }
    if (!formObj.country) {
      setError((prev) => ({ ...prev, country: "Country is required..!" }));
    }
    if (!formObj.state) {
      setError((prev) => ({ ...prev, state: "State is required..!" }));
    }
    if (!formObj.city) {
      setError((prev) => ({ ...prev, city: "City is required..!" }));
    }
    if (!formObj.pincode) {
      setError((prev) => ({ ...prev, pincode: "Pincode is required..!" }));
    }
    if (!formObj.street) {
      setError((prev) => ({ ...prev, street: "Street is required..!" }));
    }
    if (formObj.hobby === undefined) {
      setError((prev) => ({
        ...prev,
        hobby: "Minmum one hobby is required..!",
      }));
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <InputField data={data[0]} error={error} />
          <InputField data={data[1]} error={error} />
          <InputField data={data[2]} error={error} />
        </div>
        <div className="row">
          <InputField data={data[3]} error={error} />
          <div>
            <div className="radio-input">
            <label htmlFor="gender" className="label">
              Gender
            </label>
            <div className="inputfield">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                className="input"
              />
              <label htmlFor="male" className="label">
                Male
              </label>
            </div>
            <div className="inputfield">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                className="input"
              />
              <label htmlFor="female" className="label">
                Female
              </label>
            </div>
            <div className="inputfield">
              <input
                type="radio"
                name="gender"
                id="transgender"
                value="transgender"
                className="input"
              />
              <label htmlFor="transgender" className="label">
                Transgender
              </label>
            </div>
            </div>
            {error && error['gender'] && <p className="error">{error.gender} </p>}
          </div>
        </div>
        <InputField data={data[4]} error={error} />
        <div className="row">
          <PasswordInput data={data[5]} error={error} />
          <PasswordInput data={data[6]} error={error} />
        </div>
        <fieldset className="fieldset">
          <legend>Address</legend>
          <div className="row">
            <SelectInput key={"country"} data={selectData[0]} error={error} />
            <SelectInput key={"state"} data={selectData[1]} error={error} />
          </div>
          <div className="row">
            <SelectInput key={"city"} data={selectData[2]} error={error} />
            <InputField data={data[7]} error={error} />
          </div>
          <InputField data={data[8]} error={error} />
        </fieldset>
        <div className="select-container">
          <label htmlFor="hobbie" className="label">
            Hobbies
          </label>
          <div className="select-box">
            <div className="inputfield">
              <input
                type="checkbox"
                name="hobby"
                id="coding"
                value={"coding"}
              />
              <label htmlFor="coding" className="label">
                Coding
              </label>
            </div>
            <div className="inputfield">
              <input type="checkbox" name="hobby" id="music" value={"music"} />
              <label htmlFor="music" className="label">
                Music
              </label>
            </div>
            <div className="inputfield">
              <input
                type="checkbox"
                name="hobby"
                id="reading"
                value={"reading"}
              />
              <label htmlFor="reading" className="label">
                Reading
              </label>
            </div>
            <div className="inputfield">
              <input
                type="checkbox"
                name="hobby"
                id="writting"
                value={"writting"}
              />
              <label htmlFor="writting" className="label">
                Writting
              </label>
            </div>
          </div>
          {error && error['hobby'] && <p className="error">{error.hobby} </p>}
        </div>
        <div className="btns">
          <button className="btn clear " type="reset">
            Clear
          </button>
          <button className="btn submit" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default UnControlledForm;
