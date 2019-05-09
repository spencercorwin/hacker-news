export interface ArticleType {
  by: string;
  descendents: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface StateType {
  list: Number[];
  articles: ArticleType[];
  isLoading: boolean;
  counter: number;
  currentIndex: 0;
  sortBy: string;
}

export interface ListItemType {
  article: ArticleType;
  index: number;
}

export interface HeaderType {
  sortAnotherWay: (stories: string) => void;
}

export interface ContentType {
  isLoading: boolean;
  articles: ArticleType[];
  currentIndex: number;
}
