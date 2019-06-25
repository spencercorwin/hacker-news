import { StateType } from "types/types";

export const initialState: StateType = {
  homePage: {
    list: {
      isLoading: false,
      data: [],
    },
    articles: {
      isLoading: false,
      data: [],
    },
    counter: 10,
    currentIndex: 0,
  },
  discuss: {
    comments: {
      isLoading: false,
      data: [],
    },
    article: {},
  },
};
