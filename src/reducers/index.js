import { combineReducers } from "redux"; // take all the reducers and combine them into a single reducer
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailReducer,
});

export default rootReducer;
