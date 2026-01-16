import React, { useState } from "react";

export default function GuestForm() {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [schedule, setSchedule] = useState({});

  const handleAdd = () => {
    if (!name || !checkIn || !checkOut) {
      alert("Please enter all the fields");
      return;
    }

    const updated = { ...schedule };
    let current = new Date(checkIn);
    const end = new Date(checkOut);

    while (current <= end) {
      const date = current.toISOString().slice(0, 10);
      if (!updated[date]) updated[date] = [];
      updated[date].push(name);
      current.setDate(current.getDate() + 1);
    }

    setSchedule(updated);

    // reset inputs
    setName("");
    setCheckIn("");
    setCheckOut("");
  };

  return (
    <div>
      <input
        data-testid="input-guest-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        data-testid="input-checkin-date"
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />

      <input
        data-testid="input-checkout-date"
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />

      <button data-testid="add-button" onClick={handleAdd}>
        Add to Menu
      </button>

      <MealSchedule schedule={schedule} />
    </div>
  );
}

// **************************MealScheduler*****************

function MealSchedule({ schedule }) {
  const sortedDates = Object.keys(schedule).sort();

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Customer Name for Meals</th>
        </tr>
      </thead>

      <tbody data-testid="guest-list">
        {sortedDates.map((date) => (
          <tr key={date}>
            <td>{date}</td>
            <td>
              {schedule[date].map((guest, index) => (
                <span key={index}>{guest}</span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
