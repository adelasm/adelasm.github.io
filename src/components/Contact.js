import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import { socials } from "../data";


export default function Contact() {
  return (
    <section id="contact" className="relative text-gray-400 bg-gray-900 body-font">
      <div className="flex flex-col w-full py-10 mx-auto text-center lg:px-40">
        <EnvelopeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font">
          Contact
        </h1>
      </div>
      <div className="container px-5 pb-10 mx-auto flex flex-row justify-center items-center">
        {
          socials.map(social =>
            <div className="p-4">
              <SocialIcon url={social.url}></SocialIcon>
            </div>
          )
        }
      </div>
    </section>
  );
}