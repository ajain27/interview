import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddCustomer from "./AddCustomer";
import CustomerCard from "./CustomerCard";
import customerData from "./customers.json";
import EditCustomer from "./EditCustomer";
uuidv4();

function Wrapper() {
  const [customers, setCustomers] = useState(customerData);

  const onAdd = (newCustomer) => {
    setCustomers([
      ...customers,
      {
        id: uuidv4(),
        ...newCustomer,
      },
    ]);
  };

  const onEdit = (id) => {
    setCustomers(
      customers.map((cx) =>
        cx.id === id ? { ...cx, isEdited: !cx.isEdited } : cx
      )
    );
  };

  const updateCustomer = (updatedCustomer) => {
    setCustomers((prev) =>
      prev.map((c) =>
        c.id === updatedCustomer.id
          ? { ...updatedCustomer, isEdited: false }
          : c
      )
    );
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((cx) => cx.id !== id));
  };

  return (
    <div>
      <AddCustomer onAdd={onAdd} />
      {customers &&
        customers.map((customer) =>
          customer.isEdited ? (
            <EditCustomer
              updateCustomer={updateCustomer}
              currentCustomer={customer}
            />
          ) : (
            <CustomerCard
              customer={customer}
              key={customer.id}
              editCustomer={onEdit}
              deleteCustomer={deleteCustomer}
            />
          )
        )}
    </div>
  );
}

export default Wrapper;
