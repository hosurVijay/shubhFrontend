import React, { useState } from "react";
import marriage from "../../assets/marriage.jpg";
import { Link } from "react-router-dom";
import SearchIcon from "./SearchIcon";

const SearchContainer = () => {
  const cities = [
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Chandigarh",
    "Kochi",
    "Mysuru",
    "Mangaluru",
    "Udupi",
    "Hosur",
    "Belgavi",
    "Hubbli",
  ];

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setFiltered([]);
      return;
    }

    const matches = cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(matches);
  };

  const handleSelect = (city) => {
    setQuery(city);
    setFiltered([]);
  };

  return (
    <section className="relative w-full h-[50vh]  overflow-hidden">
      <img
        src={marriage}
        alt="Indian Wedding"
        className="absolute inset-0 w-full h-[50vh] min-h-120 object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col px-4 sm:px-8 lg:px-20 py-6 ">
        <div className="flex gap-4 text-sm text-white">
          <Link to="/service" className="hover:underline">
            All Services
          </Link>
        </div>

        <div className="flex flex-col justify-center flex-grow max-w-3xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Simplified Booking for
          </h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Every Traditional Event
          </h1>

          <p className="text-sm sm:text-base text-white mt-3">
            From Muhurta Finding to Catering — Verified Experts at your doorstep
          </p>

          {/* <div className="mt-6 relative max-w-xl">
            <div className="flex">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={query}
                  onChange={handleSearch}
                  placeholder="Select your city..."
                  className="w-full pl-4 pr-12 py-3 rounded-l-full bg-white text-gray-800 focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <SearchIcon className="w-5 h-5" />
                </span>
              </div>

              <button
                type="button"
                className="px-6 bg-orange-600 text-white rounded-r-full hover:bg-orange-500 transition"
              >
                Book Now
              </button>
            </div>

            {filtered.length > 0 && (
              <ul className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg max-h-56 overflow-y-auto">
                {filtered.map((city) => (
                  <li
                    key={city}
                    onClick={() => handleSelect(city)}
                    className="px-4 py-3 cursor-pointer hover:bg-orange-50 text-gray-700"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SearchContainer;
