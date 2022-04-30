import { actionTypes } from "../constants/index.js";

/* action creaters */

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: actionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const deleteProducts = (products) => {
  return {
    type: actionTypes.DELETE_PRODUCTS,
    payload: products,
  };
};
