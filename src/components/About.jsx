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
          alt="joshua acevedo picturee"
        />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4x1 sm:text-3xl text-2xl font-bold py-2 mt-24">
            Here is someone who likes coding and making things.
          </h1>
          <p>
            I'm studying my major at this moment (this is my "last" year) which is system engineering at the university Mariano Galvez. 
          </p>
          <br />
          <p>
            I've made a few things with the basics (HTML, CSS, and javascript) and I also use PHP, all of this stuff (sure) you can watch in the portfolio area. Of course, I'm studying and doing things with Nodejs and React as well to develop my skills.
            <br />
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
                href="https://linkedin.com/in/joshuaarfa"
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
