import { SortByType } from "types/types";

export interface GetArticlesParams {
  currentIndex: number;
  counter: number;
  sortBy: SortByType;
  type?: string;
}

export interface ChangeSortParams {
  type: string;
  url: string;
}

export const changeSort = (sort: string) => ({
  type: "CHANGE_SORT",
  url: sort,
});

export type HomePageActions = ChangeSortParams;
