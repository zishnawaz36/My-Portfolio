import React from "react";
import {
  FaExternalLinkAlt,
  FaAward,
  FaFilePdf,
} from "react-icons/fa";

function Certificate() {

  const links = [

    {
      id: 0,
      name: "B.Tech Provisional Certificate",
      issuer: "MAKAUT University",
      icon: <FaAward />,
      path:
        "https://drive.google.com/file/d/1yIuDiUxKousQrWRVucLxNC1AAisyFlIz/view?usp=drive_link",
    },

    {
      id: 1,
      name: "C++ Certification",
      issuer: "Great Learning",
      icon: <FaAward />,
      path:
        "https://olympus.mygreatlearning.com/courses/57491/certificate",
    },

    {
      id: 2,
      name: "JavaScript Certification",
      issuer: "Great Learning",
      icon: <FaAward />,
      path:
        "https://olympus.mygreatlearning.com/courses/30145/certificate",
    },

    {
      id: 3,
      name: "React.js Certification",
      issuer: "Great Learning",
      icon: <FaAward />,
      path:
        "https://olympus.mygreatlearning.com/courses/52045/certificate",
    },

    {
      id: 4,
      name: "Full Stack Web Development",
      issuer: "100xDevs",
      icon: <FaAward />,
      path:
        "https://app.100xdevs.com/certificate/verify/WTFAFPUW",
    },

    {
      id: 5,
      name: "Internship Completion Certificate",
      issuer: "Digisamaksh Pvt. Ltd.",
      icon: <FaFilePdf />,
      path: "/Digi certificate.pdf",
    },

    {
      id: 6,
      name: "Internship Completion Certificate",
      issuer: "Theody Svadhyay Trailblazer LLP",
      icon: <FaFilePdf />,
      path: "/Internship.Certificate (1).pdf",
    },

    {
      id: 7,
      name: "Zeeshan Nawaz Resume",
      issuer: "Resume",
      icon: <FaFilePdf />,
      path: "/Zeeshan.Nawaz.Resume.ServiceNow.pdf",
    },
  ];

  return (

    <section className="w-full min-h-screen bg-black text-white py-20 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="text-center md:text-left mb-14">

          <p className="text-[#86BC25] uppercase tracking-[4px] text-sm font-semibold mb-3">
            Certifications & Resume
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            My
            <span className="text-[#86BC25]">
              {" "}Certificates
            </span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed">
            Professional certifications, internship completion certificates,
            academic achievements, and resume showcasing my
            technical expertise and learning journey.
          </p>

        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {links.map((item) => (

            <div
              key={item.id}
              className="group bg-[#111111] border border-[#1f1f1f] rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#86BC25]/40 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[#86BC25]/10"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#86BC25] flex items-center justify-center text-black text-2xl mb-6 shadow-lg shadow-[#86BC25]/20">
                {item.icon}
              </div>

              {/* Content */}
              <div>

                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                  {item.name}
                </h2>

                <p className="text-[#86BC25] text-sm sm:text-base font-medium mb-5">
                  {item.issuer}
                </p>

              </div>

              {/* Button */}
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >

                <button className="w-full flex items-center justify-center gap-2 bg-[#86BC25] hover:bg-[#6d991d] text-black font-bold py-3 rounded-2xl transition duration-300 hover:scale-[1.02]">

                  View Document

                  <FaExternalLinkAlt size={14} />

                </button>

              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certificate;