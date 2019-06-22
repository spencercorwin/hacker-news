import { RouteComponentProps } from "react-router";
import { fetchArticles } from "modules/HomePage/actions";

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
  list: { isLoading: Boolean; data: Number[] };
  articles: ArticlesType;
  counter: number;
  currentIndex: 0;
  sortBy: SortByType;
}

export interface ListItemType extends RouteComponentProps<{}> {
  article: ArticleType;
  index: number;
  switchPage: (id?: number) => void;
}

export interface HeaderType {
  location: RouteComponentProps["location"];
  history: RouteComponentProps["history"];
  fetchArticles: ReturnType<typeof fetchArticles>;
}

export interface ContentType {
  isLoading: boolean;
  articles: { isLoading: boolean; data: any };
  currentIndex: number;
  switchPage: (id?: number) => void;
  fetchArticles: ReturnType<typeof fetchArticles>;
  location: RouteComponentProps["location"];
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
  fetchArticles: ReturnType<typeof fetchArticles>;
  location: RouteComponentProps["location"];
  articles: ArticlesType;
  currentIndex: number;
  isLoading: boolean;
  history: RouteComponentProps["history"];
}

export type SortByType = "topstories" | "newstories" | "beststories";
export type ArticlesType = { data: ArticleType[]; isLoading: boolean };
