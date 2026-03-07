import { useState } from "react";

function Form() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: null,
    document: null,
    agree: false
  });

   const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked
      });
    }

    else if (type === "file") {
      setForm({
        ...form,
        [name]: files[0]
      });
    }

    else {
      setForm({
        ...form,
        [name]: value
      });
    }
 }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form Data:", form);
  }

  return (
    <div>

      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />

        <br /><br />

        <label>Upload Photo</label>
        <input
          type="file"
          name="photo"
          onChange={handleChange}
        />

        <br /><br />

        <label>Upload Document</label>
        <input
          type="file"
          name="document"
          onChange={handleChange}
        />

        <br /><br />

        <label>
          <input
            type="checkbox"
            name="agree"
            onChange={handleChange}
          />
          I agree to terms
        </label>

        <br /><br />

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default Form;