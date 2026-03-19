import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14">
        {/* CARD */}
        <div className="bg-white shadow-sm border rounded-2xl p-8 sm:p-10">
          {/* HEADER */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Privacy Policy
            </h1>
            <div className="w-20 h-1 bg-orange-500 mb-3 rounded"></div>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>

          <div className="space-y-8 text-gray-700 text-base leading-relaxed">
            <p>
              <span className="font-semibold">
                Shubhakarya - Privacy Policy
              </span>
            </p>

            <p>
              This Privacy Policy explains how Shubhakarya collects, uses, and
              protects your personal information when you visit{" "}
              <span className="text-orange-600">
                https://shubhakarya.vercel.app/
              </span>
              . We operate from Bangalore, Karnataka, India and are committed to
              safeguarding your privacy in accordance with the Digital Personal
              Data Protection Act, 2023 and other applicable Indian laws.
            </p>

            {/* WHO WE ARE */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Who We Are
              </h2>
              <p>
                Our website address is:{" "}
                <span className="text-orange-600">
                  https://shubhakarya.vercel.app/
                </span>
              </p>
              <p className="mt-2">
                Shubhakarya is a matrimonial and auspicious events platform
                based in Bangalore, Karnataka, India. We help individuals and
                families connect for life's most important milestones.
              </p>
            </section>

            {/* INFO */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Information We Collect
              </h2>
              <p>
                When you register or interact with our platform, we may collect
                information such as your name, date of birth, contact details,
                education, occupation, religion, gotra, etc.
              </p>
              <p className="mt-2">
                We may also collect IP address and browser details for security
                and spam prevention.
              </p>
              <p className="mt-2">
                Profile photographs may be visible to other users. Avoid
                uploading images with location metadata.
              </p>
            </section>

            {/* COOKIES */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Cookies
              </h2>
              <p>We use cookies to improve your experience:</p>

              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <span className="font-medium">Preference Cookies:</span> Save
                  user details for convenience (1 year)
                </li>
                <li>
                  <span className="font-medium">Session & Login Cookies:</span>{" "}
                  Maintain login sessions
                </li>
                <li>
                  <span className="font-medium">Browser Detection:</span>{" "}
                  Temporary cookie to check browser support
                </li>
                <li>
                  <span className="font-medium">Analytics Cookies:</span>{" "}
                  Improve user experience
                </li>
              </ul>
            </section>

            {/* EMBEDDED */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Embedded Content
              </h2>
              <p>
                Embedded content from third-party websites may collect data, use
                cookies, and monitor interactions independently.
              </p>
            </section>

            {/* SHARING */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Who We Share Your Data With
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Other members (based on profile visibility)</li>
                <li>Service providers (hosting, analytics, email)</li>
                <li>Legal authorities if required</li>
              </ul>
            </section>

            {/* STORAGE */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Where We Send Your Data
              </h2>
              <p>
                Data is primarily stored in India. External processing follows
                legal safeguards.
              </p>
            </section>

            {/* RETENTION */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Data Retention
              </h2>
              <p>
                We retain data during active membership and delete it within 90
                days of account removal unless required by law.
              </p>
            </section>

            {/* RIGHTS */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Your Rights
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access</li>
                <li>Right to correction</li>
                <li>Right to erasure</li>
                <li>Right to withdraw consent</li>
                <li>Right to grievance redressal</li>
              </ul>
            </section>

            {/* CONTACT */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Contact For Grievance
              </h2>

              <p>If you have any concerns, contact us:</p>

              {/* EMAIL */}
              <p className="mt-2">
                📧{" "}
                <a
                  href="mailto:contact@shubhakarya.com?subject=Privacy Policy Query"
                  className="text-orange-600 font-medium hover:underline"
                >
                  shubhakaryateam@gmail.com
                </a>
              </p>

              {/* CONTACT PAGE */}
              <p className="mt-2">
                🔗{" "}
                <Link
                  to="/contact"
                  className="text-orange-600 font-medium hover:underline"
                >
                  Visit Contact Page
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
