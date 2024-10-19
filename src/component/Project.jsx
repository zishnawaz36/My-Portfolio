import React, { useState } from "react";
import restaurant from "../assets/restaurant.png";
import invoice from "../assets/invoice.png";
import printify from "../assets/prinitify.png";
import cryptoCoin from "../assets/Bitcoin-PNG-Transparent-HD-Photo.png";

function Project() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            src: restaurant,
            title: "Online Food Application",
            style: "shadow-orange-500",
            description: "An online food ordering application built with React.js, Tailwind CSS, Redux, Redux Toolkit, and Node.js with Express. It features various restaurants, each with different menus accessible via a menu router. The cart functionality is implemented using Redux, and users must log in to access the payment section, which is secure. JWT tokens are used for authentication, and passwords are hashed with bcrypt. Payments are processed using Razorpay.",
            demoUrl: "https://restaurant-demo.com"
        },
        {
            id: 2,
            src: invoice,
            title: "Invoice Management System",
            style: "shadow-green-500",
            description: "An invoice generator application inspired by Azan Pay. It allows users to input delivery dates, shipping addresses, and other relevant details. The system provides a printable invoice with an authorized signature, showing all itemized payment details. Additionally, users can download the invoice as a PDF.",
            demoUrl: "https://invoice-demo.com"
        },
        {
            id: 3,
            src: printify,
            title: "Printify: Print Management",
            style: "shadow-blue-500",
            description: "A print management application that streamlines print jobs. Users can manage printers and track their print jobs effectively. Features include generating reports and monitoring printer status. Technologies used: React, Node.js, Express, MySQL.",
            demoUrl: "https://printify-demo.com"
        },
        {
            id: 4,
            src: cryptoCoin,
            title: "Crypto Coin Tracker",
            style: "shadow-purple-500",
            description: "A cryptocurrency tracking application that provides real-time data on the value of various cryptocurrencies. Users can see price fluctuations, value in INR, EUR, and USD, as well as market rank. This project utilizes React for the frontend and REST APIs for data fetching.",
            demoUrl: "https://github.com/zishnawaz36/coins-page"
        }
    ];

    const handleDescriptionClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="w-full bg-gray-800 text-white py-10">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 my-5">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my projects with Demo links</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {projects.map(({ id, src, title, style, description, demoUrl }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt={title} className="w-20 mx-auto mb-4" />
                            <p className="text-xl font-semibold">{title}</p>
                            
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={() => handleDescriptionClick({ title, description })}
                                    className="px-4 py-2 m-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
                                >
                                    Description
                                </button>
                                <a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 m-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="bg-white text-black p-6 rounded-lg w-11/12 md:w-1/3">
                        <h2 className="text-xl font-bold mb-4">{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;
