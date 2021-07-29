export type SimpleObject = {
  [key?: string]: any;
};

export type InitialState = {
  modal: boolean;
  basket: SimpleObject[];
  selectedMenu: SimpleObject;
  basketMenu: boolean;
};
