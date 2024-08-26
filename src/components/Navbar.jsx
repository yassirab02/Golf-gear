import { useState } from 'react';
import { RiGolfBallLine } from "react-icons/ri";

const Navbar = () => {
  const [state, setState] = useState(false);

  // Replace with actual paths or use onClick handlers
  const navigation = [
    { title: "Home", path: "/home" },
    { title: "Products", path: "/products" },
    { title: "Customers", path: "/customers" },
    { title: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-200/55 w-full border-b md:border-0 shadow-md">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/home" className="flex items-center text-black font-bold text-2xl font-[Poppins]">
            <span>G</span>
            <RiGolfBallLine className='text-green-800 ml-0 -mr-2' />
            <span className="ml-2">lf Gear</span>
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-black hover:text-green-600">
                <a href={item.path}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          {/* Contact button for small screens */}
          <div className="mt-3 md:hidden">
            <a
              href="/contact"
              className="block py-3 px-6 text-center text-white bg-green-600 hover:bg-green-700 rounded-md shadow"
            >
              Contact
            </a>
          </div>
        </div>
        {/* Contact button for large screens */}
        <div className="hidden md:inline-block">
          <a
            href="/contact"
            className="py-3 px-6 text-white bg-green-600 hover:bg-green-700 rounded-md shadow"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
