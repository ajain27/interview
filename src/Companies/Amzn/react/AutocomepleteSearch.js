import { useEffect, useState } from "react";
import "./style.css";
import useDebounse from "./useDebounse";

function AutocomepleteSearch() {
  const [st, setSt] = useState("");
  const [fr, setFr] = useState([]);
  const debouncedList = useDebounse(st, 500);

  const getUsers = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await users.json();
    setFr(response.filter((user) => user.name.toLowerCase().includes(st)));
  };

  const handleItemClick = (user) => {
    setSt(user.name);
  };

  useEffect(() => {
    getUsers();
  }, [debouncedList]);

  return (
    <div>
      <div className="searchContainer">
        <input
          type="text"
          id="search"
          onChange={(e) => setSt(e.target.value)}
          value={st}
          placeholder="search a title"
        />
        <div className="search-results">
          {fr &&
            fr.map((item, id) => (
              <div key={item.id} onClick={() => handleItemClick(item)}>
                <span>{item.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AutocomepleteSearch;
