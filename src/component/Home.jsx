import React from "react";
import heroImage from '../assets/heroImage.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";
import Experience from "./Experience";
import Skills from "./Skill";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
                <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

                    <div className="flex flex-col justify-center h-full text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                            I'm a Full Stack Web Developer
                        </h1>
                        <p className="text-gray-400 py-4 max-w-md mx-auto md:mx-0">
                            I am currently pursuing a B.Tech in Information Technology, where I am 
                            focusing on both frontend and backend development. I have experience with 
                            HTML, CSS, Tailwind CSS, JavaScript, ReactJS, Redux, Node.js, Express.js, 
                            MongoDB, and MySQL, and I am passionate about creating dynamic and 
                            responsive web applications.
                        </p>

                        <Link to="/projects" className="group text-white w-fit px-6 py-3 my-2 mx-auto md:mx-0 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-transform duration-300">
                            View Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <MdKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>

                    <div className="my-8 md:my-0 w-full md:w-1/2 flex justify-center md:justify-end">
                        <img 
                            src={heroImage} 
                            alt="My Profile" 
                            className="rounded-2xl w-2/3 md:w-full shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300" 
                        />
                    </div>
                </div>
            </div>
            <Skills/>
            <Experience/> 
        </>
    );
}

export default Home;
