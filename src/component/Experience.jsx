import React from "react";

const experiences = [
    {
        title: "WordPress Developer Intern",
        company: "DIGISAMAKSH Group",
        description: "Worked on building and maintaining WordPress websites. Responsibilities included creating responsive themes, managing content, and enhancing website functionality using plugins.",
    },
    {
        title: "Web Development Intern",
        company: "Tech Octanet Pvt Ltd",
        description: "Developed web applications using HTML, CSS, JavaScript, and React. Collaborated on building user-friendly interfaces and enhancing website performance. Implemented features for a better user experience.",
    },
    {
        title: "Frontend Development Intern",
        company: "Svadhaya Theody (Svadhyay Trailblazer)",
        description: "Focused on frontend development using Tailwind CSS, React, and JavaScript. Designed and implemented responsive UI components for various projects. Improved user interaction and website accessibility.",
    },
];

function Experience() {
    return (
        <div name="experience" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500">Experience</p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((experience, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold">{experience.title}</h3>
                            <p className="text-xl font-medium">{experience.company}</p>
                            <p className="text-gray-400 mt-2">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
