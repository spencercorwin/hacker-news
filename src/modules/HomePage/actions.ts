export interface ArticlesParam {
  type: string;
  index: number;
  counter: number;
  sortBy: string;
  json?: JsonWebKey;
}

export interface FailureArticlesParam {
  type: string;
}

export const requestArticles = ({ index, counter, sortBy }): ArticlesParam => ({
  type: "GET_ARTICLES",
  index,
  counter,
  sortBy,
});

export const receiveArticles = ({
  index,
  counter,
  sortBy,
  json,
}): ArticlesParam => ({
  type: "RECEIVE_ARTICLES",
  index,
  counter,
  sortBy,
  json,
});

export const failureArticles = (): FailureArticlesParam => ({
  type: "FAILURE_ARTICLES",
});

export type HomePageActions = ArticlesParam | FailureArticlesParam;
