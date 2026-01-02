import React, { useEffect, useState } from "react";

import "./customer.css";

function CustomerCard(customers) {
  const [customerData, setCustomerData] = useState(customers);

  useEffect(() => {
    setCustomerData(customers);
    console.log("customerData", customerData.customers);
  }, [customers]);

  return (
    <>
      {customerData.customers.map((customer) => (
        <div className="card custom-card">
          <div className="card-body">
            <h5 className="card-title">{customer.name}</h5>
            <p className="card-text">{customer.email}</p>
            <p className="card-text">{customer.phone}</p>
          </div>
          <div className="edit">
            <button className="edit-btn">Edit</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CustomerCard;
