import { StateType } from "types/types";

export const initialState: StateType = {
  homePage: {
    list: [],
    articles: [],
    counter: 10,
    currentIndex: 0,
    isLoading: false,
  },
  discuss: {
    comments: {},
    article: {},
    isLoading: false,
  },
};
