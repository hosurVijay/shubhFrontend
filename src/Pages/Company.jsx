import React from "react";

const Company = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-32 py-14">
        {/* ===== HERO ===== */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
            Company
          </h1>
          <div className="w-20 h-1 bg-orange-500 mb-4 rounded"></div>

          <p className="text-gray-700 leading-relaxed">
            Shubhakaryaa is a thoughtfully crafted platform focused on
            simplifying traditional Hindu ceremonies by combining cultural
            respect with modern clarity.
          </p>
        </div>

        {/* ===== BRAND STATEMENT ===== */}
        <div className="mb-10 rounded-xl bg-orange-50 border border-orange-100 px-6 py-4">
          <p className="text-gray-800 italic">
            “We believe tradition should feel meaningful — not complicated.”
          </p>
        </div>

        {/* ===== WHO WE ARE ===== */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are a team driven by cultural understanding and intentional
            design. Our work focuses on reducing uncertainty in traditional
            event planning while honoring rituals, customs, and family values.
          </p>
        </section>

        {/* ===== WHAT WE DO ===== */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            What We Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-xl bg-orange-50 p-4 border border-orange-100">
              <p className="text-gray-900 font-medium mb-1">Unified Planning</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                We bring essential services like muhurta guidance, purohita
                coordination, and event needs into a single, organized space.
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-4 border border-orange-100">
              <p className="text-gray-900 font-medium mb-1">
                Clear Information
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Our platform emphasizes clarity so families can make informed
                decisions without confusion or dependency.
              </p>
            </div>
          </div>
        </section>

        {/* ===== WHY DIFFERENT ===== */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            What Makes Us Different
          </h2>
          <p className="text-gray-700 leading-relaxed mb-1">
            Unlike fragmented advice and informal coordination, Shubhakaryaa
            brings structure to traditional planning while preserving its
            emotional and cultural depth.
          </p>
          <p className="text-gray-700 leading-relaxed">
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

        {/* ===== HOW IT WORKS ===== */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            How It Works
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Understand your ceremony and requirements</li>
            <li>• Explore suitable services and guidance</li>
            <li>• Plan confidently and focus on the occasion</li>
          </ul>
        </section>

        {/* ===== VALUES ===== */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Our Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-orange-100 bg-white">
              <p className="font-medium text-gray-900 mb-1">
                Tradition & Respect
              </p>
              <p className="text-sm text-gray-700">
                Cultural authenticity guides every decision we make.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-orange-100 bg-white">
              <p className="font-medium text-gray-900 mb-1">Transparency</p>
              <p className="text-sm text-gray-700">
                Clear information over assumptions or ambiguity.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-orange-100 bg-white">
              <p className="font-medium text-gray-900 mb-1">Trust</p>
              <p className="text-sm text-gray-700">
                Built through consistency and reliability.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-orange-100 bg-white">
              <p className="font-medium text-gray-900 mb-1">Simplicity</p>
              <p className="text-sm text-gray-700">
                A calm experience matters as much as the ceremony itself.
              </p>
            </div>
          </div>
        </section>

        {/* ===== VISION ===== */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a future where families across India can plan
            traditional ceremonies with confidence, clarity, and peace of mind.
          </p>
        </section>

        {/* ===== SANSKRIT QUOTES (FINAL SECTION) ===== */}
        <section className="mt-12 rounded-2xl bg-orange-50 border border-orange-100 px-6 py-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Timeless Wisdom
          </h2>

          <div className="space-y-5">
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
        <div className="pt-6 mt-10 border-t border-orange-100 text-gray-600 text-sm">
          Shubhakaryaa evolves with intention, tradition, and respect for
          cultural heritage.
        </div>
      </div>
    </div>
  );
};

export default Company;
