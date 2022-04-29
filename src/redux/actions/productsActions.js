import * as actionType from "./index.js";

/* action creaters */

export const setProducts = (products) => {
  return {
    type: actionType.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: actionType.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const deleteProducts = (products) => {
  return {
    type: actionType.DELETE_PRODUCTS,
    payload: products,
  };
};
