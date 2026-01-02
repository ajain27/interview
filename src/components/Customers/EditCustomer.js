import React, { useEffect, useState } from "react";

function EditCustomer({ currentCustomer, updateCustomer }) {
  const [formData, setFormData] = useState(currentCustomer);

  useEffect(() => {
    setFormData(currentCustomer);
    console.log("formData in use effect", formData);
  }, [currentCustomer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateCustomer(formData);
    setFormData("");
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Phone</label>
          <br />
          <input
            type="text"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Update Customer!</button>
      </form>
    </div>
  );
}

export default EditCustomer;
