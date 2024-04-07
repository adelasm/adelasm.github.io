import { AcademicCapIcon } from "@heroicons/react/24/solid";
import React from "react";
export default function Education() {
  return (
    <section id="education" className="text-gray-400 bg-gray-900 body-font">
      <div className="flex flex-col w-full text-center pt-10 px-5">
        <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font">
          Education
        </h1>
      </div>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <a href="https://itu.dk/" target="_blank" rel="noopener noreferrer" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="itu"
            src="https://www.itu.dk/images/itushared/atriumgrandview.jpg"
          />
        </a>
        <div className="lg:flex-grow sm:mt-10 md:ml-36 md:text-right md:w-1/2 flex flex-col mb-16 md:mb-0 items-right text-center">
          <h2>IT-University of Copenhagen</h2>
          <h1 className="title-font sm:mt-4 sm:text-4xl text-3xl mb-4 font-medium">
            Bachelor of Science (BSc) in Software Development
          </h1>
          <p className="leading-relaxed">
          <b>Bachelor project |</b> Creation of a mini-library for network analysis to facilitate application of advanced techniques such as estimation of polarization. <b>Methodology included:</b>
          </p><b>
          <div className="list mb-8">
            <div className="list-none">- use of Julia/Python</div>
            <div className="list-none">- implementation of network analysis library</div>
            <div className="list-none">- CSV file reading</div>
            <div className="list-none">- automated testing</div>
          </div>
          </b>
        </div>
      </div>
    </section>
  );
}