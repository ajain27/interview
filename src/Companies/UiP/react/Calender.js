import { useCallback, useEffect, useState } from "react";
import "./style.css";

function Calender() {
  const initialPublicHolidays = ["Jan 1", "Apr 30"];

  const [publicHolidays, setPublicHolidays] = useState(initialPublicHolidays);
  const [datesInMonth, setDatesInMonth] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [dateForPH, setDayForPh] = useState("");
  const [monthForPH, setMonthForPH] = useState("");

  const generateDays = (days) => {
    const dates = [];
    for (let i = 1; i <= days; i++) {
      dates.push(i);
    }
    setDatesInMonth(dates);
  };

  const isPublicHoliday = useCallback(
    (datePassed) => {
      return publicHolidays.some((item) => {
        const [month, date] = item.split(" ");
        return selectedMonth === month && Number(date) === Number(datePassed);
      });
    },
    [publicHolidays, selectedMonth],
  );

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    if (
      month === "Jan" ||
      month === "Mar" ||
      month === "May" ||
      month === "Jul" ||
      month === "Aug" ||
      month === "Oct" ||
      month === "Dec"
    ) {
      generateDays(31);
    } else if (month === "Feb") {
      generateDays(28);
    } else {
      generateDays(30);
    }
  };

  const handleAddPublicHoliday = () => {
    if (!monthForPH || !dateForPH) return;
    setPublicHolidays((prev) => [...prev, `${monthForPH} ${dateForPH}`]);
    setMonthForPH("");
    setDayForPh("");
  };

  useEffect(() => {
    generateDays(31);
  }, []);

  return (
    <div>
      <div className="calendar-container">
        <div className="calendar-header">
          <h2>{selectedMonth}</h2>
          <select
            id="months"
            onChange={(e) => handleMonthChange(e.target.value)}
            value={selectedMonth}
          >
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>
        </div>
        <div className="weekdays">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <div key={d} className="weekday">
              {d}
            </div>
          ))}
        </div>
        <ol className="calendar-grid">
          {datesInMonth.map((date) => (
            <div
              key={date}
              className={`date-cell ${isPublicHoliday(date) ? "holiday" : ""}`}
            >
              {date}
            </div>
          ))}
        </ol>
      </div>
      <div className="add-holiday">
        <h3>Add Public Holiday</h3>

        <div className="holiday-inputs">
          <input
            type="text"
            value={monthForPH}
            placeholder="Month (e.g. Jan)"
            onChange={(e) => setMonthForPH(e.target.value)}
          />

          <input
            type="number"
            placeholder="Day (e.g. 1)"
            min="1"
            max="31"
            value={dateForPH}
            onChange={(e) => setDayForPh(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="add-btn"
          onClick={handleAddPublicHoliday}
        >
          Add Public Holiday
        </button>
      </div>
    </div>
  );
}

export default Calender;
