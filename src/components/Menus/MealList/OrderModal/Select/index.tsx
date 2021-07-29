import React, { FC, useEffect, useState } from "react";
import DataParser from "helpers/DataParser";
import { useDispatch } from "react-redux";
import { actions } from "ReduxToolkit";

interface Props {
  name: string;
  selectedMenu: any;
}

const Select: FC<Props> = ({ name, selectedMenu }) => {
  const [data, setData] = useState<any>([]);

  const dispatch = useDispatch();

  const handleData = () => {
    let dataParser = new DataParser();
    let data = dataParser.getPropertiesFromValue({ key: "key", value: name })
      .Result[0];
    setData(data);
  };

  const handleInput = (e: any) => {
    const value = e.currentTarget.value;
    let menuIndex = selectedMenu.subMenus.findIndex(
      (m: any) => m.name === name
    );
    let dataIndex = data?.items?.findIndex?.((i: any) => i.name === value);
    let subMenus = [...selectedMenu.subMenus];
    console.log(data.items[dataIndex]);
    subMenus[menuIndex] = {
      name,
      selected: value,
      price: data.items?.[dataIndex]?.price ? data.items[dataIndex].price : "",
    };
    let menuObject = { ...selectedMenu, subMenus };
    dispatch(actions.setSelectedMenu(menuObject));
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="mt-3 md:mt-10 first:mt-0">
      <div className="font-bold text-sm sm:text-xl mb-2">
        {data.description}
      </div>
      <select
        onInput={handleInput}
        className="-border--main-color border-2 w-full py-2 pl-2"
      >
        <option value="NONE">Menunuzu secin</option>
        {data.items?.map((d: any) => (
          <option value={d.name}>
            {d.name === null || d.name === "null"
              ? "Istemiyorum"
              : d.price
              ? d.name + "  ( + " + d.price + "  TL )"
              : d.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
