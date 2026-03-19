import React from "react";

const About = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-28 py-14">
        {/* CARD WRAPPER */}
        <div className="bg-white shadow-sm border rounded-2xl p-8 sm:p-10">
          {/* ===== HERO ===== */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              About Us
            </h1>
            <div className="w-20 h-1 bg-orange-500 mb-4 rounded"></div>

            <p className="text-gray-700 leading-relaxed text-base">
              Shubhakarya is a thoughtfully designed platform that simplifies
              traditional Hindu ceremonies by bringing together cultural
              authenticity and modern clarity. We aim to make every ritual feel
              accessible, structured, and meaningful for today’s families.
            </p>
          </div>

          {/* ===== BRAND STATEMENT ===== */}
          <div className="mb-8 rounded-xl bg-orange-50 border border-orange-100 px-6 py-4">
            <p className="text-gray-800 italic text-base">
              “We believe tradition should feel meaningful — not complicated.”
            </p>
          </div>

          {/* ===== WHO WE ARE ===== */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              We are a team driven by cultural understanding, technology, and
              thoughtful design. Our goal is to remove confusion from
              traditional planning while preserving the emotional and spiritual
              depth of every ceremony.
            </p>
          </section>

          {/* ===== WHAT WE DO ===== */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              What We Do
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-xl bg-orange-50 p-5 border border-orange-100">
                <p className="text-gray-900 font-medium mb-2">
                  Unified Planning
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  From muhurta selection to coordination with purohitas and
                  event essentials, we bring everything into one seamless
                  platform so families can plan without stress.
                </p>
              </div>

              <div className="rounded-xl bg-orange-50 p-5 border border-orange-100">
                <p className="text-gray-900 font-medium mb-2">
                  Clear & Reliable Information
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We present structured, easy-to-understand guidance so you can
                  make confident decisions without relying on scattered or
                  inconsistent sources.
                </p>
              </div>
            </div>
          </section>

          {/* ===== MISSION ===== */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Our mission is to bridge tradition and technology by creating a
              platform that empowers families to plan ceremonies with
              confidence, clarity, and trust.
            </p>
          </section>

          {/* ===== WHY DIFFERENT ===== */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              What Makes Us Different
            </h2>
            <p className="text-gray-700 leading-relaxed text-base mb-2">
              Traditional planning is often fragmented, unclear, and dependent
              on multiple sources. Shubhakarya brings structure and reliability
              into this process while maintaining its cultural authenticity.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              We focus equally on
              <span className="text-orange-600 font-medium"> trust</span>,
              <span className="text-orange-600 font-medium"> clarity</span>, and
              <span className="text-orange-600 font-medium">
                {" "}
                respect for tradition
              </span>
              .
            </p>
          </section>

          {/* ===== WHY CHOOSE US ===== */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">
              Why Choose Shubhakarya
            </h2>

            <ul className="space-y-2 text-gray-700 text-base">
              <li>• Structured and reliable muhurta data</li>
              <li>• Focus on cultural authenticity and correctness</li>
              <li>• Clean and intuitive user experience</li>
              <li>• Designed for modern families with traditional values</li>
            </ul>
          </section>

          {/* ===== VALUES ===== */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Our Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl border border-orange-100">
                <p className="font-medium mb-1">Tradition & Respect</p>
                <p className="text-sm text-gray-600">
                  Every decision is guided by cultural authenticity.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-orange-100">
                <p className="font-medium mb-1">Transparency</p>
                <p className="text-sm text-gray-600">
                  Clear information over assumptions or ambiguity.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-orange-100">
                <p className="font-medium mb-1">Trust</p>
                <p className="text-sm text-gray-600">
                  Built through reliability and consistency.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-orange-100">
                <p className="font-medium mb-1">Simplicity</p>
                <p className="text-sm text-gray-600">
                  A calm and easy planning experience.
                </p>
              </div>
            </div>
          </section>

          {/* ===== ROADMAP ===== */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              Our Vision for the Future
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              We envision Shubhakarya becoming a complete ecosystem for
              traditional ceremonies — including verified service providers,
              personalized guidance, and seamless planning tools that support
              families across India.
            </p>
          </section>

          {/* ===== QUOTES ===== */}
          <section className="mt-10 rounded-xl bg-orange-50 border border-orange-100 px-6 py-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Timeless Wisdom
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-orange-700 text-lg font-medium">
                  धर्मो रक्षति रक्षितः
                </p>
                <p className="text-sm text-gray-700">
                  Dharma protects those who uphold it.
                </p>
              </div>

              <div>
                <p className="text-orange-700 text-lg font-medium">
                  संस्काराः जीवनस्य आधारः
                </p>
                <p className="text-sm text-gray-700">
                  Traditions are the foundation of life.
                </p>
              </div>

              <div>
                <p className="text-orange-700 text-lg font-medium">
                  यत्र विश्वासः तत्र समृद्धिः
                </p>
                <p className="text-sm text-gray-700">
                  Where there is trust, there is prosperity.
                </p>
              </div>
            </div>
          </section>

          {/* ===== FOOT NOTE ===== */}
          <div className="pt-6 mt-8 border-t text-sm text-gray-600 text-center">
            Shubhakarya — bringing clarity to tradition and confidence to every
            ceremony.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
