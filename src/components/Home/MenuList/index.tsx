import React, { useEffect, useState } from "react";
import DataParser from "helpers/DataParser";
import { result } from "lodash";
import ImageCard from "./imageCard";

const MenuList = () => {
  const dataParser = new DataParser();
  const [menus, setMenus] = useState<{ [key: string]: string }[]>([]);

  const menusHandle = async () => {
    let data = await dataParser.getPropertiesFromValue(
      { key: "key", value: "main" },
      "items"
    ).Result;
    return data[0];
  };

  useEffect(() => {
    menusHandle().then((res) => {
      setMenus(res);
    });
  }, []);

  return (
    <div className="container mx-auto flex justify-start flex-wrap mt-10 md:justify-center ">
      {menus.map((menu) => (
        <ImageCard data={menu} />
      ))}
    </div>
  );
};

export default MenuList;
