import { useEffect, useState } from "react";
import axios from "axios";
import FilterComponent from "../components/FilterComponent/FilterComponent";
import CalendarComponent from "../components/Calendar/CalendarComponent";
import MuhurtaResultCard from "../components/MuhurtaResultCard";
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

        const params = { month, year, ...filters };

        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/filter-data`,
          { params }
        );

        setData(res.data.data || []);
      } catch {
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters, month, year]);

  const muhurtaDates = data.map((i) => i.date);

  const handleDateSelect = (dateObj) => {
    const formatted = formatDateLocal(dateObj);

    setFilters((prev) =>
      prev.date === formatted
        ? { ...prev, date: "" }
        : { ...prev, date: formatted }
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <FilterComponent filters={filters} onChange={setFilters} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CalendarComponent
          muhurtaDates={muhurtaDates}
          selectedDate={filters.date}
          onDateSelect={handleDateSelect}
          onMonthChange={(d) => {
            setMonth(d.getMonth() + 1);
            setYear(d.getFullYear());
          }}
        />

        <div className="lg:col-span-2 bg-white rounded-2xl shadow border p-4">
          <h2 className="font-semibold mb-3">Available Muhurtas</h2>

          <div className="h-[420px] overflow-y-auto">
            {loading && (
              <div className="h-full flex justify-center items-center">
                <OrbitProgress dense color="#F97316" size="medium" />
              </div>
            )}

            {!loading && data.length === 0 && (
              <p className="text-center text-gray-600 mt-10">
                No Muhurtas found
              </p>
            )}

            {!loading && data.length > 0 && (
              <div className="space-y-3">
                {data.map((item, i) => (
                  <MuhurtaResultCard key={i} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muhuratas;
