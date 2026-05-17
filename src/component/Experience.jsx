import React from "react";
import {
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

const experiences = [
  {
    title: "ServiceNow Developer",
    company: "Deloitte USI | Mar 2026 – Present",
    description:
      "Currently working as a ServiceNow Developer at Deloitte USI, contributing to enterprise workflow automation and scalable business solutions. Experienced in Client Scripts, Business Rules, GlideAjax, Flow Designer, Service Portal, and server-side scripting while collaborating with cross-functional enterprise teams.",
    icon: <Briefcase size={22} className="text-black" />,
  },

  {
    title: "Web Developer",
    company: "Bitquest LLP | Jun 2025 – Dec 2025",
    description:
      "Worked on modern and responsive web applications using React.js, JavaScript, Tailwind CSS, Node.js, and MongoDB. Developed scalable frontend interfaces, integrated REST APIs, and improved application responsiveness and performance.",
    icon: <Code2 size={22} className="text-black" />,
  },

  {
    title: "Full Stack Developer Intern",
    company: "Theody Svadhyay Trailblazer LLP | 2024",
    description:
      "Worked on customer support portals using React.js, Next.js, Tailwind CSS, and Node.js. Integrated backend APIs, improved application performance, and contributed to Agile development workflows.",
    icon: <Code2 size={22} className="text-black" />,
  },

  {
    title: "Web Development Intern",
    company: "Digisamaksh Pvt. Ltd. | 2024",
    description:
      "Developed responsive web applications using React.js, JavaScript, HTML, and CSS. Optimized performance using lazy loading and Redux Toolkit for efficient state management.",
    icon: <Code2 size={22} className="text-black" />,
  },

  {
    title: "B.Tech in Information Technology",
    company: "MAKAUT University | 2025",
    description:
      "Graduated with strong knowledge of Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks. Solved 250+ DSA problems across coding platforms and participated in technical events and hackathons.",
    icon: <GraduationCap size={22} className="text-black" />,
  },
];

function Experience() {
  return (
    <section
      name="experience"
      className="w-full min-h-screen bg-black text-white py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="mb-14 text-center md:text-left">

          <p className="text-[#86BC25] uppercase tracking-[4px] text-sm font-semibold mb-3">
            Experience & Education
          </p>

          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            My Professional
            <span className="text-[#86BC25]">
              {" "}Journey
            </span>
          </h2>

          <div className="w-24 h-1 bg-[#86BC25] mt-5 mx-auto md:mx-0 rounded-full"></div>

        </div>

        {/* Timeline */}
        <div className="relative border-l border-[#2a2a2a] ml-4 sm:ml-6 space-y-12">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-10 sm:pl-14"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[22px] sm:-left-[26px] top-2 w-10 h-10 rounded-full bg-[#86BC25] flex items-center justify-center shadow-lg shadow-[#86BC25]/20">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="bg-[#111111] border border-[#1d1d1d] rounded-2xl p-6 sm:p-8 hover:border-[#86BC25]/40 transition-all duration-300 shadow-lg hover:shadow-[#86BC25]/10">

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {exp.title}
                </h3>

                <p className="text-[#86BC25] font-medium text-sm sm:text-base mb-4">
                  {exp.company}
                </p>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;