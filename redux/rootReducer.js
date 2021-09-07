import { combineReducers } from "redux";
import bagReducer from "./bag/bag.reducer";

const rootReducer = combineReducers({
  bag: bagReducer,
});

export default rootReducer;
