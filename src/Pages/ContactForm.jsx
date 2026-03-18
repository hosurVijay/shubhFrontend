import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New Contact from Shubhakarya");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }

    setLoading(false);
  };

  const whatsappMessage = encodeURIComponent(
    "Hi, I have a query regarding Shubhakarya.",
  );

  const whatsappLink = `https://wa.me/${
    import.meta.env.VITE_WHATSAPP_NUMBER
  }?text=${whatsappMessage}`;

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-sm text-orange-600 font-semibold">CONTACT US</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get in Touch
          </h1>
        </div>

        {/* SUCCESS SCREEN */}
        {submitted ? (
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm border text-center">
            <div className="text-5xl mb-4">✅</div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Thank you for contacting us!
            </h2>

            <p className="text-gray-600 mb-4">
              Our team will reach out to you within{" "}
              <span className="font-medium">48 hours</span>.
            </p>

            <p className="text-gray-600 mb-6">
              Need quicker assistance? Contact us on WhatsApp.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-medium"
            >
              💬 Chat on WhatsApp
            </a>

            <button
              onClick={() => setSubmitted(false)}
              className="block mx-auto mt-4 text-sm text-orange-600 underline"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                Send us a message ✉️
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Feel free to reach out via the form or through the details
                below.
              </p>

              <div className="space-y-4 text-gray-700">
                <p>📧 shubhakaryateam@gmail.com</p>
                <p>📞 +91 8762829471</p>
                <p>📍 Bangalore, India</p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
              >
                💬 WhatsApp Us
              </a>
            </div>

            {/* FORM */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <form onSubmit={onSubmit} className="space-y-5">
                <input type="checkbox" name="botcheck" className="hidden" />

                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full p-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your mobile number"
                    className="w-full p-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full p-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message / Feedback
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full p-3 bg-gray-50 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {result && (
                  <p className="text-center text-sm text-gray-600">{result}</p>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
