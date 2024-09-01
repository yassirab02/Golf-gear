import React from 'react';
import { FaEnvelope,FaPhoneAlt } from 'react-icons/fa';
import { IoShareSocial } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center">
            <p className="font-medium text-green-500">Contact us</p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Get in touch</h1>
            <p className="mt-3 text-gray-500">We are here to help you.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-green-500 rounded-full bg-green-100/80">
                <FaEnvelope className="w-6 h-6" />
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800">Email</h2>
              <p className="mt-2 text-gray-500">Our friendly team is here to help.</p>
              <p className="mt-2 text-green-500">golfgear30@gmail.com</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-green-500 rounded-full bg-green-100/80">
                <IoShareSocial className="w-6 h-6" />
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800">Socials</h2>
              <p className="mt-2 text-gray-500">See more in our socials.</p>
              <ul className="flex space-x-4 mt-2">
                <li className="w-10 h-10 border border-white rounded-xl flex items-center justify-center">
                  <a href="#">
                    <FaWhatsapp className="text-green-700 w-8 h-8" />
                  </a>
                </li>
                <li className="w-10 h-10 border border-white rounded-xl flex items-center justify-center">
                  <a href="#">
                    <FaInstagram className="text-red-500 w-8 h-8" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-green-500 rounded-full bg-green-100/80">
                <FaPhoneAlt className="w-6 h-6" />
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800">Phone</h2>
              <p className="mt-2 text-gray-500">Mon-Fri from 8am to 5pm.</p>
              <p className="mt-2 text-green-500">+1 (555) 000-0000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
