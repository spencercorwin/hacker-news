// import { initialState } from "config/store";
import { homePageReducer } from "modules/HomePage/reducer";
import { discussReducer } from "modules/Discuss/reducer";
import { combineReducers } from "redux";
import { initialState } from "config/store";

export const homePage = (state: any = initialState.homePage, action: any) => {
  return homePageReducer(state, action);
};

export const discuss = (state: any = initialState.discuss, action: any) => {
  return discussReducer(state, action);
};

export const rootReducer = combineReducers({
  homePage,
  discuss,
});
