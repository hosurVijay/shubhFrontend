// utils/dateUtils.js

// ✅ For backend / logic / calendar matching
export const formatDateLocal = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`; // DO NOT CHANGE THIS
};

// ✅ For UI display only
export const formatDateDisplay = (dateStr) => {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return `${d}-${m}-${y}`;
};
