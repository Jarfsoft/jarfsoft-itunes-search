import { combineReducers } from "redux";

import history from "./history";
import favorites from "./favorites";

const rootReducer = combineReducers({
  history,
  favorites,
});

export default rootReducer;
