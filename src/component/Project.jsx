import React, { useState } from "react";

import restaurant from "../assets/restaurant.png";
import printify from "../assets/prinitify.png";
import cryptoCoin from "../assets/Bitcoin-PNG-Transparent-HD-Photo.png";
import Summeryandtranslation from "../assets/project1.png";
import Hotel from "../assets/Hotel";

import {
  Github,
  ExternalLink,
  X,
} from "lucide-react";

function Project() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      src: Summeryandtranslation,
      title: "Document Summarization & Translation",
      tech: "React • Node.js • NLP",
      description:
        "Built an NLP-based platform that allows users to summarize and translate documents securely after authentication. Developed responsive frontend interfaces using React and integrated backend APIs using Node.js and Express.js.",
      github:
        "https://github.com/zishnawaz36/Document-Summarization-Translation",
    },

    {
      id: 2,
      src: restaurant,
      title: "Online Food Ordering Platform",
      tech: "MERN • Razorpay • JWT",
      description:
        "Developed a full-stack food ordering platform with role-based access control, JWT authentication, Redux state management, Razorpay payment integration, live location tracking, and restaurant management features.",
      github:
        "https://github.com/zishnawaz36/Online-Food-Application-final",
    },

    {
      id: 3,
      src: Hotel,
      title: "Hotel Management System",
      tech: "React • Express • MongoDB",
      description:
        "Designed and developed a hotel booking management platform with secure authentication, booking workflows, responsive UI, and scalable backend APIs for seamless user experience.",
      github:
        "https://github.com/zishnawaz36/Booking-Hotel",
    },

    {
      id: 4,
      src: printify,
      title: "Printify Management",
      tech: "React • Node.js • MySQL",
      description:
        "Created a print management solution that helps users manage printers, track print jobs, monitor printer activity, and generate reports using scalable backend services.",
      github:
        "https://github.com/zishnawaz36/Printify-Homepage",
    },

    {
      id: 5,
      src: cryptoCoin,
      title: "Crypto Coin Tracker",
      tech: "React • Next.js • APIs",
      description:
        "Built a cryptocurrency tracking platform that displays real-time market prices, rankings, and currency conversions using REST APIs and dynamic frontend rendering.",
      github:
        "https://github.com/zishnawaz36/CryptoCoin",
    },
  ];

  return (
    <>
      <section className="w-full min-h-screen bg-black text-white py-20 px-4 sm:px-6 overflow-hidden">

        <div className="max-w-screen-xl mx-auto">

          {/* Heading */}
          <div className="text-center md:text-left mb-14">

            <p className="text-[#86BC25] uppercase tracking-[4px] text-sm font-semibold mb-3">
              Portfolio
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Featured
              <span className="text-[#86BC25]">
                {" "}Projects
              </span>
            </h1>

            <p className="text-gray-400 mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
              A collection of full stack applications,
              enterprise-focused solutions,
              and modern web experiences built using
              MERN stack and scalable backend technologies.
            </p>

          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project) => (

              <div
                key={project.id}
                className="bg-[#111111] border border-[#1f1f1f] rounded-3xl overflow-hidden hover:border-[#86BC25]/40 transition-all duration-300 shadow-lg hover:shadow-[#86BC25]/10 group"
              >

                {/* Image */}
                <div className="overflow-hidden bg-black p-6 flex justify-center items-center h-[220px]">

                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-40 sm:w-44 object-contain group-hover:scale-110 transition-transform duration-500"
                  />

                </div>

                {/* Content */}
                <div className="p-6">

                  <p className="text-[#86BC25] text-sm font-medium mb-2">
                    {project.tech}
                  </p>

                  <h2 className="text-xl sm:text-2xl font-bold mb-4 leading-snug">
                    {project.title}
                  </h2>

                  <div className="flex flex-wrap gap-3">

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-5 py-2 bg-[#86BC25] text-black rounded-xl font-semibold hover:scale-105 transition duration-300"
                    >
                      <ExternalLink size={18} />
                      Details
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2 border border-[#86BC25] text-[#86BC25] rounded-xl font-semibold hover:bg-[#86BC25] hover:text-black transition duration-300"
                    >
                      <Github size={18} />
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Modal */}
      {
        selectedProject && (

          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4">

            <div className="bg-[#111111] border border-[#1f1f1f] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative">

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
              >
                <X size={24} />
              </button>

              <p className="text-[#86BC25] text-sm font-medium mb-3">
                {selectedProject.tech}
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
                {selectedProject.title}
              </h2>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#86BC25] text-black font-semibold rounded-xl hover:scale-105 transition duration-300"
              >
                <Github size={18} />
                View on GitHub
              </a>

            </div>

          </div>

        )
      }
    </>
  );
}

export default Project;