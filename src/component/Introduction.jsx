import React from "react";

function Introduction() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">

      <div className="max-w-5xl mx-auto text-center">

        {/* Small Heading */}
        <p className="text-[#86BC25] uppercase tracking-[4px] text-sm font-semibold mb-4">
          Introduction
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
          ServiceNow Developer &
          <span className="text-[#86BC25]">
            {" "}Full Stack Developer
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-12">
          Passionate about building scalable enterprise solutions,
          workflow automation systems, and modern web applications.
          Currently working as a
          <span className="text-white font-semibold">
            {" "}ServiceNow Developer at Deloitte USI
          </span>
          {" "}with experience in enterprise development,
          client-side scripting, server-side scripting,
          Flow Designer, GlideAjax, and Service Portal development.

          <br /><br />

          Alongside enterprise technologies,
          I also have strong expertise in modern full stack development
          using React.js, Node.js, Express.js, MongoDB,
          Tailwind CSS, and REST API development.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#86BC25]/40 transition duration-300 shadow-lg">
            <h3 className="text-xl font-bold text-[#86BC25] mb-3">
              Frontend
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              React.js, Next.js, JavaScript,
              Tailwind CSS, Redux Toolkit,
              Responsive UI Development
            </p>
          </div>

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#86BC25]/40 transition duration-300 shadow-lg">
            <h3 className="text-xl font-bold text-[#86BC25] mb-3">
              Backend
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Node.js, Express.js,
              REST APIs, JWT Authentication,
              RBAC, Backend Architecture
            </p>
          </div>

          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#86BC25]/40 transition duration-300 shadow-lg">
            <h3 className="text-xl font-bold text-[#86BC25] mb-3">
              Enterprise Tech
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              ServiceNow, GlideAjax,
              Business Rules, Flow Designer,
              Service Portal, Workflow Automation
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Introduction;