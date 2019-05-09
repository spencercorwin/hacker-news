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
  loading: boolean;
}

export interface ListItemType {
  article: ArticleType;
  index: number;
}
