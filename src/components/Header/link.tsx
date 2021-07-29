import React, { FC } from "react";
import { capitalize } from "lodash";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  icon: any;
  to: any;
  onClick?: any;
}

const HeaderLink: FC<Props> = ({ name, icon, to, onClick }) => {
  return (
    <>
      {to !== "NONE" ? (
        <Link to={to}>
          <div className="group transform cursor-pointer flex justify-between items-center hover:scale-125 transition duration-300">
            {capitalize(name)}{" "}
            <span className="transform w-8 pl-2  group-hover:-text--main-color transition duration-500 ">
              {icon}
            </span>
          </div>
        </Link>
      ) : (
        <div
          onClick={() => {
            onClick();
          }}
          className="group transform cursor-pointer flex justify-between items-center hover:scale-125 transition duration-300"
        >
          {capitalize(name)}{" "}
          <span className="transform w-8 pl-2  group-hover:-text--main-color transition duration-500 ">
            {icon}
          </span>
        </div>
      )}
    </>
  );
};

export default HeaderLink;
