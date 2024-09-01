import React from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import { IoShareSocial } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import other from "../assets/other.jpg";

const Contact = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center">
            <p className="font-[Poppins] text-4xl text-green-500">Contact us</p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
              We’d love to hear from you
            </h1>
            <p className="mt-3 text-gray-500">Chat to our friendly team.</p>
          </div>

          <img
            className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
            src={other}
            alt=""
          />

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
            <div className="p-4 rounded-lg bg-green-100 md:p-6">
              <span className="inline-block p-3 text-green-500 rounded-lg bg-gray-100/80">
                <HiMail className="w-5 h-5" />
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">
                Chat to sales
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Speak to our friendly team.
              </p>
              <p className="mt-2 text-sm text-green-500">golfgear30@gmail.com</p>
            </div>

            <div className="p-4 rounded-lg bg-green-100 md:p-6">
              <span className="inline-block p-3 text-green-500 rounded-lg bg-gray-100/80">
                <IoShareSocial className="w-5 h-5" />
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">
                Our socials
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                See more in our socials.
              </p>
              <ul className="flex space-x-4 mt-2">
                <li className="w-10 h-10 border border-white rounded-xl flex items-center justify-center">
                  <a href="#">
                    <FaWhatsapp className="text-green-700 hover:text-green-500 w-7 h-7" />
                  </a>
                </li>
                <li className="w-10 h-10 border border-white rounded-xl flex items-center justify-center">
                  <a href="#">
                    <FaInstagram className="text-red-700 hover:text-red-500 w-7 h-7" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-green-100 md:p-6">
              <span className="inline-block p-3 text-green-500 rounded-lg bg-gray-100/80">
                <HiPhone className="w-5 h-5" />
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">
                Call us
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-sm text-green-500">+1 (555) 000-0000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
