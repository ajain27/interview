function AccordionItem({ selected, toggle, i, item }) {
  return (
    <div>
      <div className="item" key={i}>
        <div className="title" onClick={() => toggle(i)}>
          <h2>{item?.title}</h2>
          <span>{selected === i ? "-" : "+"}</span>
        </div>
        <div className={selected === i ? "content show" : "content"}>
          {item.content}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
