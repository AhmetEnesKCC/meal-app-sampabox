import React, { FC, useState } from "react";
import OrderModal from "./OrderModal";
import MenuCard from "./MealCard";
import { useSelector } from "react-redux";
import { InitialState } from "ReduxToolkit/type";

interface Props {
  menus: any;
}

const MealList: FC<Props> = ({ menus }) => {
  const modal = useSelector((state: InitialState) => state.modal);

  return (
    <div className="container mx-auto flex justify-center sm:justify-between pl-10  md:justify-start align-center flex-wrap mt-10">
      {menus.map((menu: any) => (
        <MenuCard key={menu.name} menu={menu} />
      ))}
      {modal && <OrderModal />}
    </div>
  );
};

export default MealList;
