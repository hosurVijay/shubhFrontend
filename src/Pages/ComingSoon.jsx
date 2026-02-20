import React, { useState } from "react";
import axios from "axios";

const ComingSoon = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const validate = () => {
    const newErrors = {};

    if (!firstname.trim()) {
      newErrors.firstname = "First name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!gmailRegex.test(email)) {
      newErrors.email = "Only Gmail addresses are allowed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      const payload = {
        firstname,
        lastname: lastname || null,
        email,
      };

      await axios.post(
        `${import.meta.env.VITE_API_USER_URL}/send-details`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setErrors({
        api:
          error?.response?.data?.message ||
          "Too many requests. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg p-8 sm:p-10 text-center">
        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-orange-100 text-orange-600">
          Coming Soon
        </span>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          We’re Building Something Great
        </h1>

        {/* Friendly description */}
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Our development team is continuously working on this feature, and once
          it’s ready, we’ll notify you.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            {/* First Name (Required) */}
            <div>
              <input
                type="text"
                value={firstname}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setErrors((prev) => ({ ...prev, firstname: "" }));
                }}
                placeholder="First Name"
                className={`w-full px-5 py-3 rounded-full border
                  focus:outline-none focus:ring-2
                  ${
                    errors.firstname
                      ? "border-red-400 focus:ring-red-400"
                      : "border-gray-300 focus:ring-orange-500"
                  }`}
              />
              {errors.firstname && (
                <p className="text-xs text-red-600 mt-1">{errors.firstname}</p>
              )}
            </div>

            {/* Last Name (Optional) */}
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name (optional)"
              className="w-full px-5 py-3 rounded-full border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Email */}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                placeholder="Gmail address only"
                className={`w-full px-5 py-3 rounded-full border
                  focus:outline-none focus:ring-2
                  ${
                    errors.email
                      ? "border-red-400 focus:ring-red-400"
                      : "border-gray-300 focus:ring-orange-500"
                  }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 px-6 py-3 rounded-full bg-orange-600 text-white font-medium
                         hover:bg-orange-500 transition disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Notify Me"}
            </button>
          </form>
        ) : (
          <p className="mt-8 text-green-600 font-medium">
            ✅ Thanks! We’ll keep you updated.
          </p>
        )}

        {/* API Error */}
        {errors.api && (
          <p className="mt-4 text-sm text-red-600 bg-red-50 px-4 py-2 rounded">
            {errors.api}
          </p>
        )}

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-500">
          No spam. Only important updates. You can unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
