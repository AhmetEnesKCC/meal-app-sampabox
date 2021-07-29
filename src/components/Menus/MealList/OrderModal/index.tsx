import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "ReduxToolkit";
import { InitialState, SimpleObject } from "ReduxToolkit/type";
import DataParser from "helpers/DataParser";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Select from "./Select";

const OrderModal = () => {
  const dispatch = useDispatch();

  const [extra, setExtra] = useState<SimpleObject>({});
  const [item, setItem] = useState<SimpleObject>({});
  const [extraPrice, setExtraPrice] = useState<number>(0);

  const closeModal = () => {
    dispatch(actions.setModal(false));
  };

  const selectedMenu = useSelector((state: InitialState) => state.selectedMenu);

  return (
    <div
      className="top-0 left-0 fixed w-screen h-full bg-gray-500 bg-opacity-40 flex justify-center items-center"
      id="closeModal"
      onClick={closeModal}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="border-2 container py-2 sm:py-10 bg-white rounded-md bg-opacity-95 pb-20 px-5 pt-20 overflow-y-auto"
      >
        <div className="w-full font-semibold text-3xl text-center pt-3 mb-3  sm:mt-0">
          <div className="">{selectedMenu.name}</div>
        </div>
        <div className="grid  md:grid-cols-3 py-10 ">
          <img
            className="w-1/2 mx-auto  sm:p-5 hidden md:block"
            src={"../" + selectedMenu.image}
            alt={selectedMenu.name}
          />

          <div className="pt-2 sm:pt-5">
            {selectedMenu.subMenus &&
              selectedMenu.subMenus.map((menu: any) => (
                <Select name={menu.name} selectedMenu={selectedMenu} />
              ))}
          </div>
          <div className="pt-5 pl-10">
            <div>Price</div>
            <hr className="w-3/4" />
            <div className="mt-5 font-bold text-2xl">
              {selectedMenu.price} TL
            </div>
          </div>
        </div>
        <div className="flex w-max mx-auto">
          <button
            onClick={() => {
              if (
                selectedMenu?.subMenus?.every?.((menu: any) => menu.selected)
              ) {
                const basePrice = parseFloat(
                  selectedMenu.price.toString().replace(",", ".")
                );
                dispatch(actions.setModal(false));
                let totalPrice = 0;
                selectedMenu.subMenus?.map((sm: any) => {
                  console.log(sm.price);
                  const smPrice = sm.price
                    ? parseFloat(sm.price.toString().replace(",", "."))
                    : 0;
                  sm.price && (totalPrice += smPrice);
                });
                dispatch(
                  actions.addBasket({
                    ...selectedMenu,
                    receipt: {
                      base: basePrice,
                      extra: totalPrice,
                      total: basePrice + totalPrice,
                    },
                  })
                );
              } else {
                alert("Must select the fields");
              }
            }}
            className={`${
              selectedMenu?.subMenus?.every?.((menu: any) => menu.selected)
                ? " cursor-pointer"
                : " cursor-not-allowed"
            }  w-max mr-10 mx-auto block font-bold text-center  text-2xl p-2 sm:p-5 sm:mt-8 h-max border-2 border-black hover:bg-black hover:text-white transition duration-500`}
          >
            Finish Order
          </button>
          <button
            onClick={() => {
              document.getElementById("closeModal")?.click();
            }}
            className=" w-max mx-auto block font-bold text-center  text-2xl p-2 sm:p-5 sm:mt-8 h-max border-2 border-black hover:bg-black hover:text-white transition duration-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
