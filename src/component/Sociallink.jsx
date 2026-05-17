import React, { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

import { BsFillPersonLinesFill } from "react-icons/bs";

import {
  IoMdClose,
  IoMdOpen,
} from "react-icons/io";

const SocialLinks = () => {

  const [visible, setVisible] = useState(true);

  const links = [

    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={26} />
        </>
      ),
      href: "https://www.linkedin.com/in/zeeshan-nawaz-99bb94241/",
      style: "hover:bg-blue-700",
    },

    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={26} />
        </>
      ),
      href: "https://github.com/zishnawaz36",
      style: "hover:bg-gray-700",
    },

    {
      id: 3,
      child: (
        <>
          Instagram
          <FaInstagram size={26} />
        </>
      ),
      href: "https://www.instagram.com/zeeshan.nawaz__/",
      style: "hover:bg-pink-600",
    },

    {
      id: 4,
      child: (
        <>
          Facebook
          <FaFacebook size={26} />
        </>
      ),
      href: "https://facebook.com/",
      style: "hover:bg-blue-600",
    },

    {
      id: 5,
      child: (
        <>
          Email
          <HiOutlineMail size={26} />
        </>
      ),
      href: "mailto:zeeshannawaz.makaut.it@gmail.com",
      style: "hover:bg-green-600",
    },

    {
      id: 6,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={26} />
        </>
      ),
      href: "https://drive.google.com/file/d/1Rdu6dV4ChXDV868HxxGnIYa6gbuCaaB7/view?usp=drive_linkhttps://drive.google.com/file/d/1Rdu6dV4ChXDV868HxxGnIYa6gbuCaaB7/view?usp=drive_link",
      style: "hover:bg-[#86BC25] hover:text-black",
      download: false,
    },
  ];

  return (
    <>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0 z-50">

        {/* Close/Open Button */}
        <button
          onClick={() => setVisible(!visible)}
          className="w-10 h-10 flex items-center justify-center bg-[#86BC25] text-black rounded-r-xl shadow-lg hover:scale-110 transition duration-300"
        >
          {visible ? (
            <IoMdClose size={22} />
          ) : (
            <IoMdOpen size={22} />
          )}
        </button>

        {/* Links */}
        {visible && (

          <ul className="mt-2">

            {links.map(({ id, child, href, style, download }) => (

              <li
                key={id}
                className={`group flex justify-between items-center w-44 h-14 px-4 ml-[-100px] hover:ml-0 text-white bg-[#111111] border border-[#1f1f1f] rounded-r-2xl duration-300 ${style}`}
              >

                <a
                  href={href}
                  className="flex justify-between items-center w-full font-medium"
                  target="_blank"
                  rel="noreferrer"
                  download={download}
                >
                  {child}
                </a>

              </li>

            ))}

          </ul>

        )}

      </div>

      {/* Mobile Bottom Social Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#111111]/95 backdrop-blur-md border-t border-[#1f1f1f] z-50">

        <div className="flex justify-around items-center py-3 px-2">

          {links.map(({ id, href, child }) => (

            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-[#86BC25] transition duration-300"
            >

              {React.cloneElement(child.props.children[1], {
                size: 24,
              })}

            </a>

          ))}

        </div>

      </div>

    </>
  );
};

export default SocialLinks;