import { useState } from "react";


function Form() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    job: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    console.log([name])
    console.log(type)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>

      <h2>User Registration</h2>

      {/* Name */}
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      {/* Email */}
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      {/* Gender Radio */}
      <label>Gender</label>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      {/* Role Dropdown */}
      <label>Role</label>

      <select name="job" value={formData.job} onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="Developer">Developer</option>
        <option value="Designer">Designer</option>
        <option value="Manager">Manager</option>
      </select>

      {/* Checkbox */}
      <label className="checkbox">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        I agree to terms
      </label>

      <button type="submit">Submit</button>

    </form>
  );
}

export default Form;