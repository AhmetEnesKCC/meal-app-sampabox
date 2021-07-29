import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, SimpleObject } from "./type";

const initialState: InitialState = {
  modal: false,
  selectedMenu: {},
  basket: [],
  basketMenu: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState.modal,
  reducers: {
    set: (state: boolean, { payload }: PayloadAction<boolean>) => payload,
  },
});

const selectedMenuSlice = createSlice({
  initialState: initialState.selectedMenu,
  name: "selected_menu",
  reducers: {
    select: (state: SimpleObject, { payload }: PayloadAction<SimpleObject>) => {
      return payload;
    },
  },
});

const basketSlice = createSlice({
  name: "basket",
  initialState: initialState.basket,
  reducers: {
    add: (state: SimpleObject[], { payload }: PayloadAction<SimpleObject>) => {
      return [...state, payload];
    },
    remove: (
      state: SimpleObject[],
      { payload }: PayloadAction<SimpleObject>
    ) => {},
  },
});

const basketMenuSlice = createSlice({
  name: "basketMenu",
  initialState: initialState.basketMenu,
  reducers: {
    set: (state: boolean, { payload }: PayloadAction<boolean>) => payload,
  },
});

export const actions = {
  setSelectedMenu: selectedMenuSlice.actions.select,
  setModal: modalSlice.actions.set,
  addBasket: basketSlice.actions.add,
  setBasketMenu: basketMenuSlice.actions.set,
};

const reducer = {
  modal: modalSlice.reducer,
  selectedMenu: selectedMenuSlice.reducer,
  basket: basketSlice.reducer,
  basketMenu: basketMenuSlice.reducer,
};

export const store = configureStore({
  reducer,
});
