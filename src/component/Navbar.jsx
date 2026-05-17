import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar() {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },

    {
      id: 2,
      name: "Projects",
      path: "/projects",
    },

    {
      id: 3,
      name: "Experience",
      path: "/experiance",
    },

    {
      id: 4,
      name: "Certificates",
      path: "/certificate",
    },

    {
      id: 5,
      name: "About",
      path: "/about",
    },

    {
      id: 6,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-black/90 backdrop-blur-md border-b border-[#1f1f1f] text-white z-50">

        <div className="max-w-screen-xl mx-auto h-full px-4 sm:px-6 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col"
          >

            <h1
              className="text-2xl sm:text-3xl font-bold tracking-wide"
              style={{
                fontFamily: "Dancing Script, cursive",
              }}
            >
              <span className="text-white">
                Zeeshan
              </span>

              <span className="text-[#86BC25]">
                {" "}Nawaz
              </span>
            </h1>

            <span className="text-[10px] sm:text-xs text-gray-500 tracking-[3px] uppercase">
              Deloitte USI
            </span>

          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">

            {links.map((item) => (
              <li key={item.id}>

                <Link
                  to={item.path}
                  className="relative text-gray-300 hover:text-[#86BC25] font-medium transition duration-300 group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#86BC25] transition-all duration-300 group-hover:w-full"></span>
                </Link>

              </li>
            ))}

          </ul>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setNav(!nav)}
            className="md:hidden text-white z-50"
            aria-label="menu"
          >
            {
              nav
                ? <FaTimes size={26} />
                : <FaBars size={24} />
            }
          </button>

        </div>

      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 ${
          nav ? "right-0" : "-right-full"
        } w-[75%] sm:w-[60%] h-screen bg-[#0d0d0d] border-l border-[#1f1f1f] transition-all duration-500 z-40 md:hidden`}
      >

        <div className="flex flex-col justify-center h-full px-8">

          {links.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setNav(false)}
              className="py-5 text-2xl border-b border-[#1f1f1f] text-gray-300 hover:text-[#86BC25] transition duration-300"
            >
              {item.name}
            </Link>
          ))}

        </div>

      </div>

      {/* Overlay */}
      {
        nav && (
          <div
            onClick={() => setNav(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          ></div>
        )
      }
    </>
  );
}

export default Navbar;