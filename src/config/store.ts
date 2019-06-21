import { StateType } from "types/types";

export const initialState: StateType = {
  list: [],
  articles: [],
  counter: 10,
  isLoading: false,
  currentIndex: 0,
  sortBy: "topstories",
  currentID: 0,
};
