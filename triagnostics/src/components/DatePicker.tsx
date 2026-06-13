import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const today = new Date();
  const selectedDate = value ? new Date(value) : null;

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDayClick = (day: number | null) => {
    if (day) {
      const newDate = new Date(year, month, day);
      const dateString = newDate.toISOString().split("T")[0];
      onChange(dateString);
      setShowCalendar(false);
    }
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const displayValue = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Select date";

  return (
    <div className="relative">
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        className="w-full rounded-2xl border border-gray-200 p-4 text-gray-900 text-left font-medium bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
      >
        📅 {displayValue}
      </button>

      {showCalendar && (
        <div className="absolute top-full mt-2 left-0 z-50 bg-white rounded-2xl border border-gray-200 shadow-lg p-4 w-full max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <h3 className="text-lg font-semibold text-gray-900">
              {monthNames[month]} {year}
            </h3>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-xs font-semibold text-gray-600">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => handleDayClick(day)}
                disabled={!day}
                className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                  !day
                    ? "cursor-default"
                    : day === selectedDate?.getDate() &&
                      month === selectedDate.getMonth() &&
                      year === selectedDate.getFullYear()
                    ? "bg-gradient-to-br from-teal-600 to-pink-600 text-white"
                    : day > today.getDate() && month === today.getMonth() && year === today.getFullYear()
                    ? "text-gray-400 cursor-not-allowed"
                    : "bg-gray-50 text-gray-900 hover:bg-teal-100 cursor-pointer"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowCalendar(false)}
            className="w-full mt-4 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}
