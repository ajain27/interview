import { useState } from "react";

function AddCustomer({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <br />
        <div>
          <label>Phone</label>
          <br />
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddCustomer;
