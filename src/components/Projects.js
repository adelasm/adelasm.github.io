import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap">
          {projects.map((project) => (
            <div
              className="sm:w-1/2 w-100 p-4 w-full">
              <div className="flex relative">
                <div className="px-8 py-10 relative w-full border-4 border-gray-800">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium  mb-3">
                    {project.title}
                  </h1>
                  <div className="px-8 py-3 relative">
                  {project.description.map(quality => 
                    <p className="list-none">{quality}</p>
                  )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}