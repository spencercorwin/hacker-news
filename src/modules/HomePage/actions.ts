import { ArticlesType } from "types/types";

export const GetList = "HOMEPAGE::GET_LIST";
export const ReceiveList = "HOMEPAGE::RECEIVE_LIST";
export const GetArticles = "HOMEPAGE::GET_ARTICLES";
export const ReceiveArticles = "HOMEPAGE::RECEIVE_ARTICLES";
export const PreviousPage = "HOMEPAGE::PREVIOUS_PAGE";
export const NextPage = "HOMEPAGE::NEXT_PAGE";
export const ToggleCounter = "HOMEPAGE::TOGGLE_COUNTER";

export type ArticlesParam = {
  type: string;
  sortBy?: string;
  json?: [];
  data?: any[];
  currentIndex?: number;
  counter?: number;
};

export type SwitchPageType = {
  direction: "previous" | "next";
  sortBy: string;
};

export const requestList = (): ArticlesParam => ({
  type: GetList,
});

export const receiveList = ({ json }): ArticlesParam => ({
  type: ReceiveList,
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
  } = getState().homePage;

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

export const fetchArticles = (sortBy: string) => dispatch => {
  dispatch(requestList());
  return fetch(`https://hacker-news.firebaseio.com/v0/${sortBy}.json`)
    .then(res => res.json())
    .then(result => {
      dispatch(receiveList({ json: result }));
      dispatch(fetchArticlesData());
    });
};

export const previousPage = () => ({
  type: PreviousPage,
});

export const nextPage = () => ({
  type: NextPage,
});

export const switchPage = ({
  direction,
  sortBy,
}: SwitchPageType) => dispatch => {
  if (direction === "previous") {
    dispatch(previousPage());
  }

  if (direction === "next") {
    dispatch(nextPage());
  }

  dispatch(fetchArticles(sortBy));
};

export const toggleCounter = () => ({
  type: ToggleCounter,
});

export const toggleArticlesCount = (sortBy: string) => dispatch => {
  dispatch(toggleCounter());
  dispatch(fetchArticles(sortBy));
};

export type HomePageActions = ArticlesParam;
