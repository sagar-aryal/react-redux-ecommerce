import { DELETE_PRODUCTS, SELECTED_PRODUCTS, SET_PRODUCTS } from "../actions";

const initialState = {
  products: [
    {
      id: 1,
      fullname: "Sagar",
      job: "Software Developer",
    },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return state;
    case SELECTED_PRODUCTS:
      return state;
    case DELETE_PRODUCTS:
      return state;
    default:
      return state;
  }
};
