// components/Calendar/CalendarComponent.jsx
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import { formatDateLocal } from "../../utils/dateUtils";

const CalendarComponent = ({
  muhurtaDates = [],
  selectedDate,
  onDateSelect,
  onMonthChange,
}) => {
  const today = formatDateLocal(new Date());

  return (
    <div className="bg-white rounded-2xl shadow border p-4">
      <Calendar
        value={selectedDate ? new Date(selectedDate) : null}
        onClickDay={onDateSelect}
        onActiveStartDateChange={({ activeStartDate }) =>
          onMonthChange(activeStartDate)
        }
        prev2Label={null}
        next2Label={null}
        tileDisabled={({ date, view }) =>
          view === "month" && date < new Date().setHours(0, 0, 0, 0)
        }
        tileClassName={({ date, view }) => {
          if (view !== "month") return "";

          const formatted = formatDateLocal(date);

          if (formatted === selectedDate) return "tile-selected";
          if (muhurtaDates.includes(formatted)) return "tile-muhurta";
          if (formatted === today) return "tile-today";

          return "";
        }}
      />
    </div>
  );
};

export default CalendarComponent;
