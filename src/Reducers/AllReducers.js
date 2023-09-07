import { combineReducers } from "redux";
import { SetProductReducer } from "./SetProducts";
import { AddToCartReducer } from "./AddToCartReducer";
import { FilterReducer } from "./FilterReducer";
import { CounterReducer } from "./CounterReducer";
const CombineReducers = combineReducers({
  SetProductReducer,AddToCartReducer,FilterReducer,CounterReducer
});
export default CombineReducers;
