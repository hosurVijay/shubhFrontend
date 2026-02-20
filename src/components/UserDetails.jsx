import React, { useState } from "react";
import axios from "axios";

const UserDetails = () => {
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
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setErrors({
        api:
          error?.response?.data.message ||
          "Too many request Please try again after some time",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Stay Connected with Shubhakarya
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Share your details only if you wish to receive important updates.
          </p>
        </div>

        <div className="mb-6 rounded-lg bg-orange-50 border border-orange-100 p-4 text-sm text-gray-700">
          <ul className="space-y-2">
            <li>• Important Muhurta & feature updates</li>
            <li>• No spam — only meaningful communication</li>
            <li className="font-medium text-gray-800">
              🔒 Your data is secure and never shared
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setErrors((prev) => ({ ...prev, firstname: "" }));
                }}
                className={`w-full rounded-lg border px-4 py-2.5
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

            <input
              type="text"
              placeholder="Last Name (optional)"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5
                         focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Gmail address only"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className={`w-full rounded-lg border px-4 py-2.5
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

          {errors.api && (
            <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
              {errors.api}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || submitted}
            className={`w-full py-2.5 rounded-lg text-white transition
              ${
                submitted
                  ? "bg-green-600 cursor-not-allowed"
                  : "bg-orange-600 hover:bg-orange-500"
              }
              disabled:opacity-70`}
          >
            {submitted
              ? "You’re Subscribed ✔"
              : loading
              ? "Submitting..."
              : "Notify Me"}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          You can unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
