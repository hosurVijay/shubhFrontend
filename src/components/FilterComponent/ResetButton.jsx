import React from "react";

const ResetButton = ({ onReset, disabled }) => {
  return (
    <button
      type="button"
      onClick={onReset}
      disabled={disabled}
      className={`w-full mt-2 px-4 py-2 rounded-lg border transition-all duration-200
        ${
          disabled
            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
            : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105"
        }`}
    >
      Reset Filters
    </button>
  );
};

export default ResetButton;
