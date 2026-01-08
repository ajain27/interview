import { useState } from "react";
import "./Accordion.css";

import data from "./data.json";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) return setSelected(null);
    setSelected(i);
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <AccordionItem
            selected={selected}
            toggle={toggle}
            i={i}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
