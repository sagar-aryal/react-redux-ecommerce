import { actionTypes } from "../constants/index";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.products };
    case actionTypes.SELECTED_PRODUCTS:
      return { state, ...action.products };
    case actionTypes.DELETE_PRODUCTS:
      return {};
    default:
      return state;
  }
};
