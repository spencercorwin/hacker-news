export interface GetArticlesParams {
  currentIndex: number;
  counter: number;
  sortBy: "topstores" | "newstories" | "beststories";
  type?: string;
}

export const switchSortBy = () => ({
  type: "SORT_BY",
});

export const getArticles = ({
  currentIndex,
  counter,
  sortBy,
  type,
}: GetArticlesParams) => ({
  type: "REMOTE_REQUEST",
  status: {
    request: "GET_ARTICLES_REQUEST",
    failure: "GET_ARTICLES_FAILURE",
    success: "GET_ARTICLES_SUCCESS",
  },
  data: {
    currentIndex,
    counter,
    sortBy,
    type,
  },
});

export type HomePageActions = GetArticlesParams;
