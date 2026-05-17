import React from "react";
import heroImage from "../assets/Hero.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Skills from "./Skill";
import Experience from "./Experience";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        name="home"
        className="w-full min-h-screen bg-black text-white flex items-center overflow-hidden py-24 md:py-0"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">

          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10">

            <p className="text-[#86BC25] text-xs sm:text-sm font-semibold tracking-[3px] sm:tracking-[4px] uppercase mb-4">
              ServiceNow Developer • Deloitte USI
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              Hi, I’m{" "}
              <span className="text-[#86BC25]">
                Zeeshan Nawaz
              </span>
            </h1>

            <h2 className="text-lg sm:text-2xl text-gray-300 mb-6 font-medium leading-relaxed">
              Building Enterprise Solutions & Modern Web Experiences
            </h2>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              ServiceNow Developer at
              <span className="text-white font-semibold">
                {" "}Deloitte USI
              </span>
              {" "}with hands-on experience in enterprise workflow automation,
              client-side scripting, server-side scripting,
              Business Rules, GlideAjax, Flow Designer,
              and Service Portal development.

              <br /><br />

              Also experienced in
              <span className="text-white font-semibold">
                {" "}React.js, Node.js, Express.js, MongoDB
              </span>
              {" "}and modern full stack development.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">

              <Link
                to="/projects"
                className="group w-full sm:w-auto justify-center px-7 py-3 bg-[#86BC25] hover:bg-[#6d991d] rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:scale-105"
              >
                View Projects

                <MdKeyboardArrowRight
                  size={22}
                  className="group-hover:rotate-90 duration-300"
                />
              </Link>

              <a
                href="https://drive.google.com/file/d/1QaDRVxP_uCun9y7h9CpEALkK_WIkQEgg/view"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center px-7 py-3 border border-[#86BC25] text-[#86BC25] rounded-xl hover:bg-[#86BC25] hover:text-black transition-all duration-300 font-semibold"
              >
                Download Resume
              </a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center md:text-left">

              <div>
                <h3 className="text-3xl font-bold text-[#86BC25]">
                  250+
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  DSA Problems Solved
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#86BC25]">
                  ServiceNow
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Enterprise Development
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#86BC25]">
                  MERN
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  Full Stack Projects
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center relative">

            {/* Green Glow */}
            <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-[#86BC25] opacity-20 blur-[100px] rounded-full"></div>

            <img
              src={heroImage}
              alt="Zeeshan Nawaz"
              className="relative rounded-3xl w-[230px] xs:w-[260px] sm:w-[340px] md:w-[430px] border border-[#86BC25]/20 shadow-2xl shadow-[#86BC25]/10 hover:scale-105 transition-transform duration-500 object-cover"
            />

          </div>

        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* CTA Section */}
      <section className="bg-[#0d0d0d] py-16 sm:py-20 px-4 sm:px-6 text-center border-t border-[#1f1f1f]">

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Let’s Build Something Amazing Together 🚀
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-10">
          Passionate about building scalable enterprise applications,
          workflow automation solutions, and modern digital experiences.
        </p>

        <Link to={"./Contact"}
         className="inline-block w-full sm:w-auto px-8 py-4 bg-[#86BC25] text-black font-bold rounded-xl hover:scale-105 transition duration-300 shadow-lg"
        >
          Contact Me
        </Link>

      </section>
    </>
  );
}

export default Home;