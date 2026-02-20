import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterComponent from "../components/FilterComponent/FilterComponent";
import CalendarComponent from "../components/Calendar/CalendarComponent";
import { OrbitProgress } from "react-loading-indicators";
import { formatDateLocal } from "../utils/dateUtils";
const Muhuratas = () => {
  const today = new Date();

  const [filters, setFilters] = useState({
    muhurtaType: "",
    day: "",
    date: "",
  });

  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const params = { month, year };

        if (filters.muhurtaType) params.muhurtaType = filters.muhurtaType;
        if (filters.day) params.day = filters.day;
        if (filters.date) params.date = filters.date;

        const res = await axios.get(
          `${import.meta.env.VITE_API_DATA_URL}/filter-data`,
          { params }
        );

        setData(res.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch data:", error.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters, month, year]);

  const muhurtaDates = Array.isArray(data) ? data.map((item) => item.date) : [];

  const handleDateSelect = (dateObj) => {
    setFilters((prev) => {
      if (prev.date === formatDateLocal(dateObj)) {
        // toggle OFF → show whole month
        return { ...prev, date: "", day: "" };
      }
      return { ...prev, date: formatDateLocal(dateObj), day: "" };
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <FilterComponent filters={filters} onChange={setFilters} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CalendarComponent
          muhurtaDates={muhurtaDates}
          selectedDate={filters.date}
          onDateSelect={handleDateSelect}
          onMonthChange={(date) => {
            setMonth(date.getMonth() + 1);
            setYear(date.getFullYear());
          }}
        />

        <div className="lg:col-span-2 bg-white rounded-2xl shadow border p-4">
          <h2 className="text-lg font-semibold mb-2">Available Muhurtas</h2>

          {filters.date && (
            <p className="text-sm text-gray-600 mb-3">
              Showing results for{" "}
              <span className="font-semibold text-orange-600">
                {filters.date}
              </span>
            </p>
          )}

          <div className="h-[420px] overflow-y-auto pr-2">
            {/* ===== LOADING ===== */}
            {loading && (
              <div className="h-full flex items-center justify-center">
                <OrbitProgress dense color="#F97316" size="medium" />
              </div>
            )}

            {!loading && data.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center px-6">
                <div className="w-14 h-14 mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-2xl">📅</span>
                </div>

                <p className="text-lg font-semibold text-gray-800">
                  No Muhurtas Found
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  {filters.date
                    ? `No Muhurtas available for ${filters.date}`
                    : "Try changing filters or month"}
                </p>
              </div>
            )}

            {!loading && data.length > 0 && (
              <ul className="space-y-4">
                {data.map((item, index) => (
                  <li
                    key={index}
                    className="border border-orange-200 rounded-xl p-4 hover:bg-orange-50/40 transition"
                  >
                    {/* HEADER */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <p className="font-semibold text-orange-600">
                        {item?.muhurtaType}
                      </p>

                      <span className="text-sm font-medium text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
                        {item?.time}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-1">
                      📅 {item?.date} • {item?.day}
                    </p>

                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                      <Detail label="Month" value={item?.month} />
                      <Detail label="Paksha" value={item?.paksha} />
                      <Detail label="Tithi" value={item?.tithi} />
                      <Detail label="Nakshatra" value={item?.nakshatra} />
                      <Detail label="Lagna" value={item?.lagna} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muhuratas;

const Detail = ({ label, value }) => (
  <div className="bg-white border rounded-lg px-3 py-2">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-medium text-gray-800">{value ?? "—"}</p>
  </div>
);
