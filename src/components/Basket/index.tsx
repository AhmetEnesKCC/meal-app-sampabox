import { LockClosedIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "ReduxToolkit";
import { InitialState } from "ReduxToolkit/type";

const Basket = () => {
  const basket = useSelector((state: InitialState) => state.basket);
  const basketMenu = useSelector((state: InitialState) => state.basketMenu);

  const dispatch = useDispatch();

  const calculateTotal = () => {
    let total = 0;
    basket.map((i: any) => {
      i?.receipt?.total && (total += i.receipt.total);
    });
    return total;
  };

  return (
    <>
      {basketMenu && (
        <div className="top-0 h-full fixed bg-gray-800  z-10 left w-3/4 sm:w-1/2">
          <div className="font-bold text-3xl text-center text-white mt-10 mb-2">
            Basket
            <XIcon
              onClick={() => {
                dispatch(actions.setBasketMenu(false));
              }}
              className="w-10 float-right m-5 mt-0 cursor-pointer"
            />
          </div>
          <hr />
          <div className="mx-10 text-green-200">
            {basket.map((item: any) => {
              return (
                <div className="my-10">
                  <div className="font-semibold text-2xl mb-2">
                    {item.name}
                    <span className="float-right">{item.receipt.base}</span>
                  </div>
                  <div className="text-2xl">Extras</div>
                  <hr />
                  {item.subMenus.map((i: any) => {
                    return (
                      <div className="mt-2">
                        {i.name}
                        <span className="float-right"> {i.price}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div className="text-4xl">TOTAL : {calculateTotal()}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Basket;
