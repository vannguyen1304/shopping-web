import * as types from "./constants";

export const addItem = (product) => {
  return {
    type: types.ADD_TO_CART,
    product: product,
  };
};

export const deleteItem = (product) => {
  return {
    type: types.DELETE_CARTITEM,
    product: product,
  };
};

export const updateItem = (product, number) => {
  return {
    type: types.UPDATE_CARTITEM,
    product: product,
    number: number,
  };
};
