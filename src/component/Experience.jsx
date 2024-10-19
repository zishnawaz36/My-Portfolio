import React from "react";

function Experience() {
    return (
        <>
            <div name="experience" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold border-b-4 border-gray-500">Experience</p>
                    </div>

                    <div className="mt-10">
                        {/* Experience 1 */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold">WordPress Developer Intern</h3>
                            <p className="text-xl">DIGISAMAKSH Group</p>
                            <p className="text-gray-400 mt-2">
                                Worked on building and maintaining WordPress websites. Responsibilities included creating responsive themes, 
                                managing content, and enhancing website functionality using plugins.
                            </p>
                        </div>

                        {/* Experience 2 */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold">Web Development Intern</h3>
                            <p className="text-xl">Tech Octanet Pvt Ltd</p>
                            <p className="text-gray-400 mt-2">
                                Developed web applications using HTML, CSS, JavaScript, and React. Collaborated on building user-friendly 
                                interfaces and enhancing website performance. Implemented features for a better user experience.
                            </p>
                        </div>

                        {/* Experience 3 */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold">Frontend Development Intern</h3>
                            <p className="text-xl">Svadhaya Theody (Svadhyay Trailblazer)</p>
                            <p className="text-gray-400 mt-2">
                                Focused on frontend development using Tailwind CSS, React, and JavaScript. Designed and implemented 
                                responsive UI components for various projects. Improved user interaction and website accessibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
