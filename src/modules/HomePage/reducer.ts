import { initialState } from "config/store";
import { Action } from "types/actions";

export const homePageReducer = (
  state: any = initialState.homePage,
  action: Action
) => {
  switch (action.type) {
    case "HOMEPAGE::GET_LIST":
      return { ...state, list: { ...state.list, isLoading: true } };
    case "HOMEPAGE::RECEIVE_LIST":
      return { ...state, list: { isLoading: false, data: action.json } };
    case "HOMEPAGE::GET_ARTICLES":
      return { ...state, articles: { ...state.articles, isLoading: true } };
    case "HOMEPAGE::RECEIVE_ARTICLES":
      return { ...state, articles: { isLoading: false, data: action.json } };
    case "HOMEPAGE::PREVIOUS_PAGE":
      return { ...state, currentIndex: state.currentIndex - state.counter };
    case "HOMEPAGE::NEXT_PAGE":
      return { ...state, currentIndex: state.currentIndex + state.counter };
    case "HOMEPAGE::TOGGLE_COUNTER":
      return { ...state, counter: state.counter === 10 ? 20 : 10 };
    default:
      return state;
  }
};
