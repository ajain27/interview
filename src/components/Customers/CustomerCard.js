import React, { useEffect, useState } from "react";

import "./customer.css";

function CustomerCard({ customer, editCustomer }) {
  const [customerData, setCustomerData] = useState(customer);

  useEffect(() => {
    setCustomerData(customer);
  }, [customer]);

  return (
    <>
      <div className="card custom-card">
        <div className="card-body">
          <h5 className="card-title">{customerData.name}</h5>
          <p className="card-text">{customerData.email}</p>
          <p className="card-text">{customerData.phone}</p>
        </div>
        <div className="edit">
          <button
            className="edit-btn"
            onClick={() => editCustomer(customerData.id)}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomerCard;
