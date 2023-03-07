import React from "react";
// import Laptop from "../assets/laptop.jpg";
// import Photo from "../assets/me.ce543e2d59c280a75457.JPG"
import Photo from "../assets/me.JPG";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
// import { Link } from "react-scroll";

const About = () => {
  return (
    <div name="About" className="w-full bg-white py-16 px-4">
      <h1 className="text-[#3E4098] font-bold md:text-4x1 sm:text-3xl text-2xl py-2 text-center mb-8">
        About
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[300px] mx-auto my-4 rounded-3xl "
          src={Photo}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4x1 sm:text-3xl text-2xl font-bold py-2 mt-24">
            So far, I consider myself as a junior developer
          </h1>
          <p>
            I'm from Guatemala and yes I'm writing in english because I believe
            100% english is so useful in this area. I've done a few dev things,
            of course you can watch it on the "portfolio" area.
          </p>
          <br />
          <p>
            Here below are three sites where you can see more about me and a
            little of bit what i'm doing.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center m-auto mt-5">
            <div className="flex md:w-[75%] my- ml-3">
              <a
                target="_blank"
                href="https://twitter.com/JoshArfa"
                rel="noreferrer"
              >
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
                href="https://github.com/fireclint/portfolio-app-react/blob/main/src/components/Navbar.jsx"
                rel="noreferrer"
              >
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
