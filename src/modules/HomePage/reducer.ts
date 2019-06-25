import { initialState } from "config/store";
import { Action } from "types/actions";

export const homePageReducer = (
  state: any = initialState.homePage,
  action: Action
) => {
  switch (action.type) {
    case "HOMEPAGE::GET_LIST":
      return { ...state, isLoading: true };
    case "HOMEPAGE::RECEIVE_LIST":
      return { ...state, list: action.json, isLoading: false };
    case "HOMEPAGE::GET_ARTICLES":
      return { ...state, isLoading: true };
    case "HOMEPAGE::RECEIVE_ARTICLES":
      return { ...state, articles: action.json, isLoading: false };
    case "HOMEPAGE::PREVIOUS_PAGE":
      return { ...state, currentIndex: state.currentIndex - state.counter };
    case "HOMEPAGE::NEXT_PAGE":
      return { ...state, currentIndex: state.currentIndex + state.counter };
    case "HOMEPAGE::TOGGLE_COUNTER":
      return { ...state, counter: state.counter === 10 ? 20 : 10 };
    case "HOMEPAGE::RESET_INDEX":
      return { ...state, currentIndex: 0 };
    default:
      return state;
  }
};
