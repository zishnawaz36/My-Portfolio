import React, { useState } from "react";
import axios from "axios";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setErrorMessage("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:4500/api/contactme",
        formData
      );

      if (response.status === 201) {
        setSuccessMessage(
          "Message sent successfully 🚀"
        );

        setErrorMessage("");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }

    } catch (error) {

      setErrorMessage(
        "Something went wrong. Please try again later."
      );

      setSuccessMessage("");

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <p className="text-[#86BC25] uppercase tracking-[4px] text-sm font-semibold mb-3">
            Contact Me
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">
            Let’s Work
            <span className="text-[#86BC25]">
              {" "}Together
            </span>
          </h1>

         <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
  Passionate about enterprise technology,
  workflow automation, and scalable web applications.
  Open to professional networking, technology discussions,
  and meaningful conversations around innovation and development.
</p>

          {/* Contact Info */}
          <div className="space-y-5">

            <div className="flex items-center gap-4 bg-[#111111] border border-[#1f1f1f] rounded-2xl p-4 hover:border-[#86BC25]/40 transition duration-300">

              <div className="bg-[#86BC25] p-3 rounded-xl text-black text-xl">
                <MdEmail />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Email
                </h3>

                <p className="text-gray-400 text-sm sm:text-base break-all">
                  zeeshannawaz.makaut.it@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 bg-[#111111] border border-[#1f1f1f] rounded-2xl p-4 hover:border-[#86BC25]/40 transition duration-300">

              <div className="bg-[#86BC25] p-3 rounded-xl text-black text-xl">
                <MdPhone />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Phone
                </h3>

                <p className="text-gray-400 text-sm sm:text-base">
                  +91 XXXXX XXXXX
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 bg-[#111111] border border-[#1f1f1f] rounded-2xl p-4 hover:border-[#86BC25]/40 transition duration-300">

              <div className="bg-[#86BC25] p-3 rounded-xl text-black text-xl">
                <MdLocationOn />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Location
                </h3>

                <p className="text-gray-400 text-sm sm:text-base">
                  India
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right Side Form */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-3xl p-6 sm:p-8 shadow-2xl">

          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Send Message 🚀
          </h2>

          {/* Success Message */}
          {successMessage && (
            <div className="bg-[#86BC25] text-black font-medium p-3 rounded-xl mb-5 text-center">
              {successMessage}
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="bg-red-500 text-white p-3 rounded-xl mb-5 text-center">
              {errorMessage}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-black border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#86BC25] transition duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-black border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#86BC25] transition duration-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full bg-black border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#86BC25] transition duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full bg-black border border-[#2a2a2a] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#86BC25] transition duration-300 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#86BC25] hover:bg-[#6d991d] text-black font-bold py-3 rounded-xl transition duration-300 hover:scale-[1.02]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactMe;