import { combineReducers } from "redux";
import { productsReducer } from "./productsReducers";

/* combining all individual reducers together */

const reducers = combineReducers({
  allProducts: productsReducer,
});

export default reducers;
