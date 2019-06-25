// import { StateType } from "types/types";
import { initialState } from "config/store";

export const discussReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "DISCUSS::FETCH_ARTICLE_START":
      return { ...state, articles: { ...state.articles, isLoading: true } };
    case "DISCUSS::RECEIVE_ARTICLE":
      return { ...state, articles: { isLoading: false, data: [action.json] } };
    default:
      return state;
  }
};
