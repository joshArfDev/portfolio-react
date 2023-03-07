import React from "react";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      name="Contact"
      className="max-w-[1240px] mx-auto py-16 px-4 grid gap-8 text-gray-300"
    >
      <div>
        <h1 className="w-full text-3xl font-bold text-[#9ABBEB]">
          joshuaAcevedo
        </h1>
        <p className="py-4">
          This page was made by me and I used React for my site components and Tailwind for the styles.
          <br />
          You can view more about me on those links ⤵️
        </p>
        <div className="flex justify-center sm:justify-end md:w-[90%] my-6">
        <a target="_blank" href="https://twitter.com/JoshArfa" rel="noreferrer">
                <FaTwitterSquare size={40} />
              </a>
              <a
                target="_blank"
                href="https://github.com/joshArfDev/"
                rel="noreferrer"
              >
                <FaGithubSquare size={40} />
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/joshuaarfa"
                rel="noreferrer"
              >
                <FaLinkedin size={40} />
              </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
