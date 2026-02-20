import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import cook from "../../assets/cook2.png";
import grocery from "../../assets/grocery.png";
import astrologer from "../../assets/prohit2.png";
import muhuratFinder from "../../assets/muhart2.png";
import pendal from "../../assets/pendal2.png";
import purohit from "../../assets/astrologer2.png";
import select from "../../assets/select.png";
import connect from "../../assets/connect.png";
import Celebrate from "../../assets/celebrate.png";
import brahmin from "../../assets/brahmin.png";
import vaadya from "../../assets/vaadya.png";
import transportation from "../../assets/transportation.png";

const HomeContent = () => {
  const buttonItems = [
    {
      name: "Muhurta Finder",
      path: "/muhurat",
      buttonKey: "muhurta_finder",
      img: muhuratFinder,
      active: true,
    },
    {
      name: "Purohita Booking",
      path: "/",
      buttonKey: "purohita_booking",
      img: purohit,
      active: false,
    },
    {
      name: "Astrologer",
      path: "/",
      buttonKey: "astrologer",
      img: astrologer,
      active: false,
    },
    {
      name: "Cook / Caterer Services",
      path: "/",
      buttonKey: "cook_booking",
      img: brahmin,
      active: false,
    },
    {
      name: "Pendal & Lighting Services",
      path: "/-services",
      buttonKey: "pendal_services",
      img: pendal,
      active: false,
    },
    {
      name: "Shub Kits",
      path: "/",
      buttonKey: "grocery_kits",
      img: grocery,
      active: false,
    },
    {
      name: "Vaadya",
      path: "/",
      buttonKey: "vaadya",
      img: vaadya,
      active: false,
    },
    {
      name: "Transportation",
      path: "/",
      buttonKey: "transport",
      img: transportation,
      active: false,
    },
  ];

  const eventPlan = [
    { name: "Select & Book", path: "/", img: select, active: false },
    { name: "Connect & Customize", path: "/", img: connect, active: false },
    { name: "Execute & Celebrate", path: "/", img: Celebrate, active: false },
  ];

  const handleCount = async (buttonKey) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_BUTTON_COUNT}/increment`, {
        buttonKey,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full">
      {/* ===== SERVICES ===== */}
      <div className="px-4 sm:px-8 lg:px-20 py-8">
        <h1 className="text-xl font-bold mb-6">Our Services</h1>

        <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {buttonItems.map((button) => (
            <li key={button.buttonKey} className="flex justify-center">
              {button.active ? (
                <Link
                  to={button.path}
                  onClick={() => handleCount(button.buttonKey)}
                  className="flex flex-col items-center text-center w-full rounded-2xl bg-gray-50 p-4 transition-colors duration-300 hover:bg-gray-100"
                >
                  <img
                    src={button.img}
                    alt={button.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full"
                  />
                  <p className="mt-3 text-sm font-semibold">{button.name}</p>
                </Link>
              ) : (
                <div className="flex flex-col items-center text-center w-full rounded-2xl bg-gray-50 p-4 opacity-75 cursor-pointer">
                  <img
                    src={button.img}
                    alt={button.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full"
                  />
                  <p className="mt-3 text-sm font-semibold">{button.name}</p>

                  <span className="mt-1 text-xs text-gray-600 flex items-center gap-1">
                    <ClockIcon /> Coming Soon
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ===== EVENT PLAN ===== */}
      <div className="px-4 sm:px-8 lg:px-20 py-10">
        <h2 className="text-lg font-bold mb-8">
          Your Traditional Event, Planned in 3 Simple Steps
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {eventPlan.map((event, index) => (
            <li key={index} className="flex justify-center">
              {event.active ? (
                <Link
                  to={event.path}
                  className="flex flex-col items-center text-center w-full p-6 rounded-2xl bg-gray-50 transition-colors duration-300 hover:bg-gray-100"
                >
                  <img
                    src={event.img}
                    alt={event.name}
                    className="w-28 h-28 object-contain mb-4"
                  />
                  <p className="text-base font-medium">
                    {index + 1}. {event.name}
                  </p>
                </Link>
              ) : (
                <div className="flex flex-col items-center text-center w-full p-6 rounded-2xl bg-gray-50 opacity-75 cursor-pointer">
                  <img
                    src={event.img}
                    alt={event.name}
                    className="w-28 h-28 object-contain mb-4"
                  />
                  <p className="text-base font-medium">
                    {index + 1}. {event.name}
                  </p>

                  <span className="mt-1 text-xs text-gray-600 flex items-center gap-1">
                    <ClockIcon /> Coming Soon
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ===== CLOCK ICON (REUSED) ===== */
const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
    />
  </svg>
);

export default HomeContent;
