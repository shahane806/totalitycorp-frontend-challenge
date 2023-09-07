import { combineReducers } from "redux";
import { SetProductReducer } from "./SetProducts";
import { AddToCartReducer } from "./AddToCartReducer";
import { FilterReducer } from "./FilterReducer";
const CombineReducers = combineReducers({
  SetProductReducer,AddToCartReducer,FilterReducer
});
export default CombineReducers;
