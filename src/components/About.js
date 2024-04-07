import React from "react";
export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-medium">
              Mads Loose Smith
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Meticulous and dedicated programmer looking for entry-level experience
            </h1>
            <p className="mb-8 leading-relaxed">
            I became familiar with <b>React.js</b> and <b>Node.js</b> in my project with <b>Fellowmind</b> to illustrate the backend logic of a <b>NoSQL</b> database. I'm keen to utilize my skills in service of an open and transparent team. I stand for inclusivity and collaboration.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/433634827_10211337442788711_4631246450677787595_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W12fxd5b9icAb5jFSMG&_nc_oc=AdjoO6thHfHCezJ4jhKabAGq5EyXslAwLOlDWm-rbvnZG9r84ceCPa1x4I75t0BDy4I&_nc_ht=scontent-cph2-1.xx&oh=00_AfBfPkGAs6_ueo77KD-rxEHl7Yc2W7EET-DcJKBjRfhG9w&oe=6615EDC3"
            />
          </div>
        </div>
      </section>
    );
  }