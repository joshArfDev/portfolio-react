import React from "react";

const Portfolio = () => {
  return (
    <div name="Portfolio" className="bg-white py-16 px-4">
      <h1 className="text-[#3E4098] font-bold md:text-4x1 sm:text-3xl text-2xl py-2 text-center mb-20 ">
        PortFolio
      </h1>
      {/* <div className="border-2 border-b-stone-600"></div> */}

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* py-16 px-4 */}
        <div>
          <h2 className="font-bold text-2xl text-center py-8"> Vanilla Js </h2>
          <a
            target='_blank' 
            href="https://to-do-app-jsss.netlify.app" 
            className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
            rel="noreferrer"
          >
            <p className="py-2 border-b mx-8 "> ➡️ TODO_list: using js DOM and local-storage </p>
          </a>
        </div>

        <div>
          <h2 className="font-bold text-2xl text-center py-8"> React</h2>
          <a 
            target="_blank"
            href="https://tict-tact-toe.netlify.app" 
            className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
            rel="noreferrer"
          >
            <p className="py-2 border-b mx-8 "> ➡️ Tic Tac Toe: In this one i used the state (hook) to control the players, this a simple game. </p>
          </a>
          <a
            target="_blank" 
            href="https://gif-appreact.netlify.app"
            className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
            rel="noreferrer"
          >
            <p className="py-2 border-b mx-8 "> ➡️ Gif app: In this one i used the state (hook) I used the GIPHY Devlopers Api. Here you can search your favorites gifs. </p>
          </a>
        </div>

        <div>
          <h2 className="font-bold text-2xl text-center py-8"> Php</h2>
          <a href="/" className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <p className="py-2 border-b mx-8 "> ➡️ CRUD: This CRUD uses a DB (mysql) and Bootstrap (for the styles). 🚩 I'm working on this one yet </p>
          </a>
        </div>

        <div>
          <h2 className="font-bold text-2xl text-center py-8 "> NodeJs</h2>
          <a href="/" className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <p className="py-2 border-b mx-8 "> ➡️ Favorite links: this one uses Js, nodejs, and mysql. Here you can log in to the web app and save your favorite links (every user has their own session). 🚩  I'm working on this one yet </p>
          </a>
        </div>
        
        <div>
          <h2 className="font-bold text-2xl text-center py-8 "> HTML, CSS & JS</h2>
          <a 
            target="_blank"
            href="https://web-mas-carrito.netlify.app" 
            className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
            rel="noreferrer"
          >
            <p className="py-2 border-b mx-8 "> ➡️Beef Website whit good practices (css) and a shopping cart  </p>
          </a>
          <a 
            target="_blank"
            href="https://coffeewebs.netlify.app" 
            className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
            rel="noreferrer"
          >
            <p className="py-2 border-b mx-8 "> ➡️Coffee Website using some effects </p>
          </a>
        </div>


      </div>
    </div>
  );
};

export default Portfolio;
