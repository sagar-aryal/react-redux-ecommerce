import { combineReducers } from "redux";
import { productsReducer } from "./productsReducers";

/* combining all individual reducers together */

const reducers = combineReducers({
  products: productsReducer,
});

export default reducers;
