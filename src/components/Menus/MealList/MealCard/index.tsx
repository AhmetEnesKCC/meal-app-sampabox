import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { actions } from "ReduxToolkit/index";
interface Props {
  menu: any;
}

const MenuCard: FC<Props> = ({ menu }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    const subMenus: any[] = [];

    menu.subMenus?.map((m: any) => {
      subMenus.push({ name: m, selected: "" });
    });
    dispatch(actions.setSelectedMenu({ ...menu, subMenus }));
    dispatch(actions.setModal(true));
  };

  console.log(process.env.PUBLIC_URL);
  return (
    <div className="flex flex-basis-1 sm:flex-basis-1 md:flex-basis-2 xl:flex-basis-3 py-8 sm:px-10 pl-0 pt-0 my-20 flex-col px-10 sm:px-0">
      <div className="font-semibold text-left pl-3 text-base mb-5">
        {menu.caption}
      </div>
      <div className="mr-5 overflow-hidden w-full">
        <img
          className="transform hover:scale-110 transition duration-700"
          src={menu.image}
          alt={menu.caption}
        />
      </div>

      <div className="font-bold pl-3 text-4xl my-5">{menu.price} TL</div>
      <div
        onClick={clickHandler}
        className="cursor-pointer text-center flex items-center justify-center h-max mt-2 w-max px-3 border-2 text-2xl py-3 -border--main-color hover:-bg--main-color hover:text-white hover:font-bold"
      >
        Add Basket
      </div>
    </div>
  );
};

export default MenuCard;
