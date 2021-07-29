import React from "react";
import Image from "./isvec-kofte.jpg";

const Hero = () => {
  return (
    <div className="w-full -bg--main-color py-10  my-10 py-40">
      <div className="container mx-auto flex justify-between items-center flex-col-reverse md:flex-row">
        <div className="flex flex-col w-full md:w-1/2  text-white items-start justify-around self-stretch px-10 md:px-0 ">
          <section className="md:text-left text-center">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Your usual dinner service. But better.
            </h2>
            <p className="text-xl md:text-2xl text-white opacity-80 mt-5">
              Make your order to taste that delicious meal.
            </p>
          </section>
          <div
            onClick={() =>
              document
                .getElementById("Title")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer rounded-5 mt-5 font-semibold border-white border-2 w-max px-3 py-2 text-xl hover:bg-white hover:-text--main-color transition duration-500 mx-auto md:mx-0"
          >
            Order Now
          </div>
        </div>
        <img
          className="rounded-lg px-10 mb-10  lg:px-0"
          src={Image}
          alt="isvec kofte"
        />
      </div>
    </div>
  );
};

export default Hero;
