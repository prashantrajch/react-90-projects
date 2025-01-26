import InputField from "./Input/InputField";
import * as yup from "yup";

let datas = [
  {
    label: "Name",
    id: "name",
    type: "text",
    placeholder: "First Name",
  },
  {
    label: "Email",
    id: "email",
    type: "email",
    placeholder: "example@gmail.com",
  },
];

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

const LibraryValidatio = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    try {
      let validForm = await schema.isValid(formObj);
      if (validForm) {
        console.log("I am succesfful fr")
      } else {
        await schema.validate(formObj,{abortEarly: false});
      }
    } catch (error) {
      console.dir(error.errors);
    }
  }
  return (
    <div>
      <form action="" className="container" onSubmit={handleSubmit}>
        {datas.map((data) => (
          <InputField key={data.id} data={data} />
        ))}
        <div className="btns">
          <button className="btn clear" type="reset">
            Clear
          </button>
          <button className="btn submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LibraryValidatio;
