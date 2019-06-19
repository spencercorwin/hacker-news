import { RouteComponentProps } from "react-router";
import { changeSort } from "modules/HomePage/actions";

export interface ArticleType {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string;
  text?: string;
}

export interface StateType {
  list: Number[];
  articles: ArticleType[];
  isLoading: boolean;
  counter: number;
  currentIndex: 0;
  sortBy: SortByType;
  currentID: number;
}

export interface ListItemType extends RouteComponentProps<{}> {
  article: ArticleType;
  index: number;
  switchPage: (id?: number) => void;
}

export interface HeaderType {
  sortAnotherWay: (stories: string) => void;
  changeSort: typeof changeSort;
  sortBy: SortByType;
}

export interface ContentType {
  isLoading: boolean;
  articles: ArticleType[];
  currentIndex: number;
  switchPage: (id?: number) => void;
  previousPage: (id?: number) => void;
  nextPage: (id?: number) => void;
  showNumberOfArticles: (num: number) => void;
  counter: number;
}

export interface DiscussType {
  isLoading: boolean;
  switchPage: (id?: number) => void;
  id: number;
}

export interface DiscussState {
  article: ArticleType;
}

export interface CommentsType {
  isLoading: boolean;
  id: number;
  kids: number[];
}

export interface CommentsState {
  comments: Comment[];
}

export interface CommentType {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

export interface HomePageType {
  changeSort: typeof changeSort;
  sortBy: SortByType;
}

export type SortByType = "topstories" | "newstories" | "beststories";
