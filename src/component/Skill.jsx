import html from "../assets/html logo.png";
import css from "../assets/CSS-Logo.png";
import tailwind from "../assets/tailwind.jpeg";
import js from "../assets/javaScript.png";
import ts from "../assets/ts logo.jpeg";
import react from "../assets/react logo.jpeg";
import redux from "../assets/redux.jpeg";
import Node from "../assets/Node.jpeg";
import express from "../assets/express.jpeg";
import mongodb from "../assets/mongo.jpeg";
import mysql from "../assets/mysql.jpeg";
import opps from "../assets/opps.jpeg";
import c from "../assets/c--logo-icon-0.png";
import nextjs from "../assets/icons8-next.js-48.png";
import cms from "../assets/CMS.png";
import webdev from "../assets/Web development.jpg";

function Skills() {

  const tech = [

    /* ServiceNow Skills */
    {
      id: 1,
      title: "ServiceNow Development",
    },

    {
      id: 2,
      title: "ServiceNow Administration",
    },

    {
      id: 3,
      title: "Flow Designer",
    },

    {
      id: 4,
      title: "Service Portal",
    },

    {
      id: 5,
      title: "Business Rules",
    },

    {
      id: 6,
      title: "GlideAjax",
    },

    /* Frontend */
    {
      id: 7,
      src: html,
      title: "HTML",
    },

    {
      id: 8,
      src: css,
      title: "CSS",
    },

    {
      id: 9,
      src: tailwind,
      title: "Tailwind CSS",
    },

    {
      id: 10,
      src: js,
      title: "JavaScript",
    },

    {
      id: 11,
      src: ts,
      title: "TypeScript",
    },

    {
      id: 12,
      src: react,
      title: "React.js",
    },

    {
      id: 13,
      src: redux,
      title: "Redux Toolkit",
    },

    {
      id: 14,
      src: nextjs,
      title: "Next.js",
    },

    /* Backend */
    {
      id: 15,
      src: Node,
      title: "Node.js",
    },

    {
      id: 16,
      src: express,
      title: "Express.js",
    },

    /* Database */
    {
      id: 17,
      src: mongodb,
      title: "MongoDB",
    },

    {
      id: 18,
      src: mysql,
      title: "MySQL",
    },

    /* Concepts */
    {
      id: 19,
      src: c,
      title: "C++",
    },

    {
      id: 20,
      src: opps,
      title: "OOPs",
    },

    {
      id: 21,
      src: cms,
      title: "CMS",
    },

    {
      id: 22,
      src: webdev,
      title: "Web Development",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="text-center md:text-left mb-14">

          <p className="text-[#86BC25] uppercase tracking-[4px] text-sm font-semibold mb-3">
            Technical Skills
          </p>

          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Technologies &
            <span className="text-[#86BC25]">
              {" "}Tools
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed">
            Experienced in ServiceNow Administration & Development,
            enterprise workflow automation, and full stack web development
            using scalable modern technologies.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7">

          {tech.map((item) => (

            <div
              key={item.id}
              className="group bg-[#111111] border border-[#1f1f1f] rounded-3xl p-5 sm:p-6 flex flex-col items-center justify-center hover:border-[#86BC25]/40 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[#86BC25]/10 min-h-[180px]"
            >

              {/* If Image Exists */}
              {item.src ? (

                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-black rounded-2xl p-3 mb-5 overflow-hidden">

                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />

                </div>

              ) : (

                /* ServiceNow Text Box */
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-[#86BC25]/10 border border-[#86BC25]/20 rounded-2xl mb-5">

                  <span className="text-[#86BC25] font-bold text-lg text-center px-2">
                    SN
                  </span>

                </div>

              )}

              {/* Title */}
              <h3 className="text-sm sm:text-lg font-semibold text-center text-gray-200 leading-snug">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

        {/* Extra ServiceNow Section */}
        <div className="mt-16 bg-[#111111] border border-[#1f1f1f] rounded-3xl p-6 sm:p-8">

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            ServiceNow Expertise 🚀
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {[
              "Client Scripts",
              "Business Rules",
              "GlideAjax",
              "Flow Designer",
              "Service Portal",
              "Catalog Items",
              "UI Policies",
              "ACL & RBAC",
              "Server-Side Scripting",
              "Workflow Automation",
              "REST API Integration",
              "Incident Management",
            ].map((skill, index) => (

              <div
                key={index}
                className="bg-black border border-[#1f1f1f] rounded-2xl px-4 py-3 text-center text-gray-300 hover:border-[#86BC25]/40 hover:text-white transition duration-300"
              >
                {skill}
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;
