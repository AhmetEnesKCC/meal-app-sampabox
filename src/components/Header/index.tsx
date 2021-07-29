import React from "react";
import Logo from "./logo";
import { ShoppingCartIcon, MenuAlt1Icon } from "@heroicons/react/solid";
import Information from "./information";
import HeaderLink from "./link";
import { useDispatch } from "react-redux";
import { actions } from "ReduxToolkit";

const Header = () => {
  const dispatch = useDispatch();
  const links = [
    {
      name: "basket",
      icon: ShoppingCartIcon,
      to: "NONE",
      onClick: () => {
        dispatch(actions.setBasketMenu(true));
      },
    },
    { name: "Menus", icon: MenuAlt1Icon, to: "/" },
  ];

  return (
    <div className="container mx-auto">
      <Information />
      <div className="text-center flex justify-between items-center h-12 py-8 px-10 md:px-0">
        <Logo />
        <div className="flex justify-between w-48 sm:w-60">
          {links.map((link) => (
            <HeaderLink
              key={link.name}
              to={link.to}
              name={link.name}
              onClick={link?.onClick}
              icon={<link.icon />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
