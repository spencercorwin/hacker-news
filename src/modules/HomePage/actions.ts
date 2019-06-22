import { ArticlesType } from "types/types";

export const GetList = "GET_LIST";
export const ReceiveList = "RECEIVE_LIST";
export const GetArticles = "GET_ARTICLES";
export const ReceiveArticles = "RECEIVE_ARTICLES";

export type ArticlesParam = {
  type: string;
  sortBy?: string;
  json?: [];
  data?: any[];
  currentIndex?: number;
  counter?: number;
};

export const requestList = (sortBy): ArticlesParam => ({
  type: GetList,
  sortBy,
});

export const receiveList = ({ sortBy, json }): ArticlesParam => ({
  type: ReceiveList,
  sortBy,
  json,
});

export const failureList = (): ArticlesParam => ({
  type: "FAILURE_LIST",
});

export const requestArticles = (): ArticlesParam => ({
  type: GetArticles,
});

export const receiveArticles = (json): ArticlesParam => ({
  type: ReceiveArticles,
  json,
});

export const fetchArticlesData = () => (dispatch, getState) => {
  const {
    list: { data },
    currentIndex,
    counter,
    articles: { isLoading },
  } = getState();
  const articles: ArticlesType = { data: [], isLoading };
  dispatch(requestArticles());
  data.slice(currentIndex, currentIndex + counter).map(number =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${number}.json`)
      .then(res => res.json())
      .then(result => {
        articles.data.push(result);
        if (articles.data.length === counter) {
          dispatch(receiveArticles(articles.data));
        }
      })
  );
};

export const fetchArticles = (sortBy: ArticlesParam) => dispatch => {
  dispatch(requestList(sortBy));
  return fetch(`https://hacker-news.firebaseio.com/v0/${sortBy}.json`)
    .then(res => res.json())
    .then(result => {
      dispatch(receiveList({ sortBy, json: result }));
      dispatch(fetchArticlesData());
    });
};

export type HomePageActions = ArticlesParam;
