import React from "react";

const FilterComponent = ({ filters, onChange }) => {
  const muhuratTypes = [
    "Vivaha (Marriage)",
    "Namakarana (Naming Ceremony)",
    "Aksharabhyasa",
    "Gruhapravesha",
    "Simanta",
    "Karnavedhana",
    "Upanayana",
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="bg-white rounded-2xl shadow border p-6">
      <h2 className="text-xl font-semibold mb-6">Filter Muhurtas</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Muhurta Type */}
        <div>
          <label className="block text-sm font-medium mb-2">Muhurta Type</label>
          <select
            value={filters.muhurtaType}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                muhurtaType: e.target.value,
              }))
            }
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">All</option>
            {muhuratTypes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Day */}
        <div>
          <label className="block text-sm font-medium mb-2">Day</label>
          <select
            value={filters.day}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                day: e.target.value,
                date: "", // reset date if day chosen
              }))
            }
            disabled={!!filters.date}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">All</option>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Reset */}
        <div className="flex items-end">
          <button
            onClick={() =>
              onChange({
                muhurtaType: "",
                day: "",
                date: "",
              })
            }
            className="w-full px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
