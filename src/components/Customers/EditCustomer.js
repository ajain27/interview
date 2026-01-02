import React, { useState } from "react";

function EditCustomer({ onEdit }) {
  const [value, setValue] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue(value);
  };

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Phone</label>
          <br />
          <input
            type="text"
            name="phone"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <br />
      </form>
    </div>
  );
}

export default EditCustomer;
