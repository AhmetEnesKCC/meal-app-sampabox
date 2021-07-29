import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="font-bold text-lg sm:text-2xl">
      <Link to="/home">Meal App</Link>
    </div>
  );
};

export default Logo;
