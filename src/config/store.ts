import { StateType } from "types/types";

export const initialState: StateType = {
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
  sortBy: "topstories",
};
