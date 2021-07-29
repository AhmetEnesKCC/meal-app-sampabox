import React, { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  data: { [key: string]: string };
}

const ImageCard: FC<Props> = ({ data }) => {
  return (
    <div className="d flex flex-col lg:flex-basis-3 px-10 mt-20 md:flex-basis-2 sm:flex-basis-1  ">
      <Link to={`/menus/${data.name}`}>
        <div className="relative overflow-hidden group">
          <div className="absolute w-full h-full  -bg--main-color bg-opacity-60 right-full  transition-all duration-500 group-hover:right-0 font-bold text-white hidden sm:flex items-center justify-center text-3xl">
            {data.name}
          </div>
          <div className="sm:hidden font-bold text-2xl pb-2">{data.name}</div>
          <img className="w-full" src={data.image} alt={data.name} />
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
