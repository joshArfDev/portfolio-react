import React from "react";

const Skills = () => {
  return (
    <div name="Skills" className="w-full py-[10rem] px-4 bg-gray-100">
      <h1 className="text-[#3E4098] font-bold md:text-4x1 sm:text-3xl text-2xl py-2 text-center mb-20">
        Skills
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* <img className="w-20 mx-auto mt-[-3rem]" src={Html} alt="/" /> */}
          <div className="flex w-25 mx-auto mt-[-4rem]">
            <svg
              className="w-20 mx-auto mt-[-4rem]"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-html5"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff4500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-javascript"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffbf00"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-react-native"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00abfb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
              <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
              <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
              <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
              <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
              <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
              <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
            </svg>
            <svg
              className="w-20 mx-auto mt-[-4rem]"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-sass"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fd0061"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M12 10.523c2.46 -.826 4.002 -.826 4.002 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-center py-8">Frontend dev</h2>
          {/* <p className="text-center font-bold">Knowleges</p> */}
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              {" "}
              Html{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Advanced
              </span>
            </p>
            <p className="py-2 border-b mx-8 ">
              Css{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Intermediate
              </span>
            </p>
            <p className="py-2 border-b mx-8 ">
              JavaScript{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Intermediate
              </span>
            </p>
            <p className="py-2 border-b mx-8 ">
              React{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Basic
              </span>
            </p>
            <p className="py-2 border-b mx-8 ">
              Sass & Tailwind{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Basic
              </span>
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          {/* <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          /> */}
          <div className="flex w-25 mx-auto mt-[-4rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-javascript"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffbf00"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-php"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#645CBB"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <ellipse cx="12" cy="12" rx="10" ry="9" />
              <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
              <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
              <path d="M12 7.5l-1 5.5" />
              <path d="M11.6 10h2.4l-.5 3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-python"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#009988"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
              <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
              <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
              <line x1="11" y1="6" x2="11" y2="6.01" />
              <line x1="13" y1="18" x2="13" y2="18.01" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center py-8">Backend dev</h2>
          {/* <p className="text-center font-bold">Knowleges</p> */}
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              JavaScript{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Intermediate
              </span>
            </p>
            <p className="py-2 border-b mx-8 ">
              Php{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Basic
              </span>
            </p>
            <p className="py-2 border-b mx-8 ">
              Python{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Basic
              </span>
            </p>
            <p className="py-2 border-b mx-8 ">
              Node Js{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Basic
              </span>
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          /> */}
          <div className="flex w-25 mx-auto mt-[-4rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-checkbox"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#13005A"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 11 12 14 20 6" />
              <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center py-8">Others</h2>
          {/* <p className="text-center font-bold">Knowleges</p> */}
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              English{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Intermediate
              </span>
            </p>
            <p className="py-2 border-b mx-8 ">
              Data Bases{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Basic
              </span>
            </p>
            <p className="py-2 border-b mx-8 ">
              UX/UI{" "}
              <span className="bg-indigo-600 rounded-lg px-1 font-thin text-slate-100">
                Basic
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
