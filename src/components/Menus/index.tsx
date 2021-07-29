import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import DataParser from "helpers/DataParser";
import { FireIcon } from "@heroicons/react/solid";
import MealList from "./MealList";

interface RouterProps {
  menu: any;
}

interface MainProps extends RouteComponentProps<RouterProps> {}

const Menus: FC<MainProps> = ({ match }) => {
  const dataParser = new DataParser();
  const [menus, setMenus] = useState<any>([]);

  const handleMenu = async () => {
    const data = await dataParser.getPropertiesFromValue(
      { key: "name", value: match.params.menu },
      "items"
    ).Result;
    return data[0];
  };

  useEffect(() => {
    handleMenu().then((res) => {
      setMenus(res);
    });
  }, []);
  return (
    <div className="w-full">
      <div className="mt-32 text-3xl mx-auto -bg--main-color text-white w-max px-10 py-5 rounded-tl-2xl rounded-br-2xl font-serif sm:text-5xl">
        {match.params.menu}
      </div>
      <MealList menus={menus} />
    </div>
  );
};

export default Menus;
