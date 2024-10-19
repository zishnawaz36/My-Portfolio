import React from "react";

function Certificate() {
    const links = [
        {
            id: 1,
            name: "C++",
            path: "https://olympus.mygreatlearning.com/courses/57491/certificate",
        },
        {
            id: 2,
            name: "JavaScript",
            path: "https://olympus.mygreatlearning.com/courses/30145/certificate",
        },
        {
            id: 3,
            name: "React.js",
            path: "https://olympus.mygreatlearning.com/courses/52045/certificate",
        },
        {
            id: 4,
            name: "Full Stack Web Development",
            path: "76", 
        },
    ];

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 ">
                <h1 className="text-white text-6xl mb-10 my-32">Certificates</h1>

                <ul className="text-4xl mb-8">
                    {links.map(({ id, name, path }) => (
                        <li key={id} className="mb-8 flex flex-col items-center">
                            <span className="text-blue-400 hover:underline">{name}</span>
                            <a 
                                href={path}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 mt-2 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105">
                                    View Certificate
                                </button>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Certificate;
