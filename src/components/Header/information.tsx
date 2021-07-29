import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";

const Information = () => {
  return (
    <div className="container -text--main-color py-2">
      <a href="tel:5555555555" className="flex w-max">
        <PhoneIcon className="w-3 mr-2" />
        Call now
      </a>
    </div>
  );
};

export default Information;
