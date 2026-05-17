function About() {
  return (
    <>
      <section className="w-full min-h-screen bg-black text-white py-20 px-4 sm:px-6 overflow-hidden">
        
        <div className="max-w-screen-lg mx-auto">

          {/* Heading */}
          <div className="mb-12 text-center md:text-left">
            <p className="text-[#86BC25] uppercase tracking-[4px] text-sm font-semibold mb-3">
              About Me
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Passionate About Building
              <span className="text-[#86BC25]"> Enterprise Solutions</span>
            </h1>

            <div className="w-24 h-1 bg-[#86BC25] mt-5 mx-auto md:mx-0 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">

            {/* Intro Card */}
            <div className="bg-[#111111] border border-[#1d1d1d] rounded-2xl p-6 sm:p-8 hover:border-[#86BC25]/40 transition duration-300 shadow-lg">

              <h2 className="text-2xl font-bold mb-4 text-white">
                👨‍💻 Who I Am
              </h2>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                I’m a
                <span className="text-white font-semibold">
                  {" "}ServiceNow Developer
                </span>
                {" "}currently working at Deloitte USI with experience in
                enterprise workflow automation, client-side scripting,
                server-side scripting, Business Rules,
                GlideAjax, Flow Designer, and Service Portal development.

                <br /><br />

                Alongside enterprise development, I also have strong knowledge of
                <span className="text-white font-semibold">
                  {" "}MERN Stack Development
                </span>
                {" "}including React.js, Node.js, Express.js, and MongoDB.
              </p>

            </div>

            {/* Skills & Education */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Skills */}
              <div className="bg-[#111111] border border-[#1d1d1d] rounded-2xl p-6 sm:p-8 hover:border-[#86BC25]/40 transition duration-300 shadow-lg">

                <h2 className="text-2xl font-bold mb-5 text-white">
                  ⚡ Technical Skills
                </h2>

                <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-relaxed">

                  <li>
                    • ServiceNow Development
                  </li>

                  <li>
                    • Client Scripts & Business Rules
                  </li>

                  <li>
                    • GlideAjax & Flow Designer
                  </li>

                  <li>
                    • Service Portal Development
                  </li>

                  <li>
                    • React.js & Next.js
                  </li>

                  <li>
                    • Node.js & Express.js
                  </li>

                  <li>
                    • MongoDB & MySQL
                  </li>

                  <li>
                    • Tailwind CSS & Redux Toolkit
                  </li>

                </ul>

              </div>

              {/* Education */}
              <div className="bg-[#111111] border border-[#1d1d1d] rounded-2xl p-6 sm:p-8 hover:border-[#86BC25]/40 transition duration-300 shadow-lg">

                <h2 className="text-2xl font-bold mb-5 text-white">
                  🎓 Education
                </h2>

                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                  Pursuing
                  <span className="text-white font-semibold">
                    {" "}B.Tech in Information Technology
                  </span>
                  {" "}from MAKAUT University with a strong academic background and
                  hands-on experience in enterprise development and scalable web technologies.
                </p>

                <div className="mt-6">

                  <h3 className="text-4xl font-bold text-[#86BC25]">
                    250+
                  </h3>

                  <p className="text-gray-400 mt-2">
                    DSA Problems Solved across LeetCode, GeeksforGeeks & CodeChef
                  </p>

                </div>

              </div>

            </div>

            {/* Experience */}
            <div className="bg-[#111111] border border-[#1d1d1d] rounded-2xl p-6 sm:p-8 hover:border-[#86BC25]/40 transition duration-300 shadow-lg">

              <h2 className="text-2xl font-bold mb-5 text-white">
                💼 Professional Experience
              </h2>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Currently working at
                <span className="text-white font-semibold">
                  {" "}Deloitte USI
                </span>
                {" "}as a ServiceNow Developer, contributing to enterprise-level solutions,
                workflow automation, and scalable business applications.

                <br /><br />

                Previously worked on full stack development projects involving
                authentication systems, secure REST APIs,
                payment integrations, and scalable backend architectures.
              </p>

            </div>

            {/* Projects */}
            <div className="bg-[#111111] border border-[#1d1d1d] rounded-2xl p-6 sm:p-8 hover:border-[#86BC25]/40 transition duration-300 shadow-lg">

              <h2 className="text-2xl font-bold mb-5 text-white">
                🚀 Featured Projects
              </h2>

              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Built modern and scalable applications including
                food ordering platforms with secure authentication,
                payment integration, real-time tracking,
                and enterprise-grade backend systems.

                <br /><br />

                Also developed AI-powered applications and multilingual tools
                showcasing strong problem-solving and full stack development capabilities.
              </p>

            </div>

            {/* Goals */}
            <div className="bg-gradient-to-r from-[#111111] to-[#161616] border border-[#86BC25]/20 rounded-2xl p-6 sm:p-8 shadow-xl">

              <h2 className="text-2xl sm:text-3xl font-bold text-[#86BC25] mb-6 text-center">
                🎯 Career Goals
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 text-gray-300 text-sm sm:text-base">

                <div className="bg-black/40 rounded-xl p-4 border border-[#1d1d1d]">
                  Become an expert in ServiceNow & Enterprise Development
                </div>

                <div className="bg-black/40 rounded-xl p-4 border border-[#1d1d1d]">
                  Build scalable enterprise-grade applications
                </div>

                <div className="bg-black/40 rounded-xl p-4 border border-[#1d1d1d]">
                  Explore AI-powered workflow automation
                </div>

                <div className="bg-black/40 rounded-xl p-4 border border-[#1d1d1d]">
                  Continuously learn and contribute to modern technologies
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default About;