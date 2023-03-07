import React from "react";
import Typed from "react-typed";

import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="Hero" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#c0c7a9e0] font-bold p-2 text-xl">Hello There!</p>
        <h1 className="md:text-7xl sm:text-6xl text-xl font-bold md:py-6 ">
          I'm Joshua Acevedo
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"> - </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
            strings={["Web Developer", "Dev", "hard worker person"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#c0c7a9e0]">
          Coding and enjoying keep learning
        </p>
        <Link to="Contact" smooth={true} duration={500}>
        <button className="bg-[#9ABBEB] w-[400px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Let's Connect
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
