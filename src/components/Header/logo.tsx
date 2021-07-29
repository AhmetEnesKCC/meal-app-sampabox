import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="font-bold text-2xl">
      <Link to="/home">Meal App</Link>
    </div>
  );
};

export default Logo;
