import { DeviceMobileIcon, PhoneIncomingIcon } from "@heroicons/react/solid";
import React from "react";
const Footer = () => {
  return (
    <div className="font-bold w-full pt-10 bg-gray-600 mt-20">
      <div className="grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-none  container mx-auto">
        <div className="w-full sm:w-max">
          <div className="w-max mx-auto text-center sm:text-left">
            <div className="font-extrabold text-5xl">Meal App</div>
            <div className="font-extrabold text-1xl mt-3">
              a meal App service
            </div>
          </div>
        </div>
        <ul
          className={` list-disc underline footer-link flex justify-center items-center sm:items-start flex-col`}
        >
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Terms of service</a>
          </li>
          <li>
            <a href="#">Information Service</a>
          </li>
        </ul>
        <div className="text-yellow-400 font-extrabold text-6xl  text-right flex justify-center sm:justify-end items-center">
          <PhoneIncomingIcon className="max-h-16 mr-3" /> 5555555
        </div>
      </div>
      <div className="w-full bg-gray-800 mt-10 h-20 flex justify-center items-center">
        <div className="container mx-auto flex justify-center items-center">
          <div className="cursor-pointer text-center font-bold text-white flex justify-between items-center w-max border-2 border-white px-2 hover:text-black hover:bg-white transition duration-300">
            Download Now
            <DeviceMobileIcon className="h-10 -mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
