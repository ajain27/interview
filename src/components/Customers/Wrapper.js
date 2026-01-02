import { useEffect, useState } from "react";

import AddCustomer from "./AddCustomer";
import CustomerCard from "./CustomerCard";
import customers from "./customers.json";

function Wrapper() {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(customers);
  }, [customers]);

  const onAdd = (newCustomer) => {
    setNewData([...customers, newCustomer]);
  };

  const onEdit = (id) => {
    console.log(id);
  };

  return (
    <div>
      <AddCustomer onAdd={onAdd} />
      <div>
        <CustomerCard
          customers={!newData ? customers : newData}
          onEdit={onEdit}
        />
      </div>
    </div>
  );
}

export default Wrapper;
