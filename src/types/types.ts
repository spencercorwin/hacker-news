import { RouteComponentProps } from "react-router";
import {
  fetchArticles,
  switchPage,
  toggleArticlesCount,
} from "modules/HomePage/actions";
import { fetchArticleForDiscussPage } from "modules/Discuss/actions";

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
  homePage: {
    list: number[];
    articles: ArticleType[];
    counter: number;
    currentIndex: number;
    isLoading: boolean;
  };
  discuss: {
    comments: CommentType | {};
    article: ArticleType | {};
    isLoading: boolean;
  };
}

export interface ListItemType extends RouteComponentProps<{}> {
  article: ArticleType;
  index: number;
  getUrl?: (string) => string;
  toDiscussPage?: (id: number) => void;
}

export interface HeaderType extends RouteComponentProps<{}> {
  location: RouteComponentProps["location"];
  history: RouteComponentProps["history"];
  resetIndex?: () => {};
}

export interface ContentType {
  isLoading: boolean;
  articles: ArticleType[];
  currentIndex: number;
  switchPage: ReturnType<typeof switchPage>;
  fetchArticles: ReturnType<typeof fetchArticles>;
  location: RouteComponentProps["location"];
  toggleArticlesCount: ReturnType<typeof toggleArticlesCount>;
  counter: number;
  getUrl?: (string) => string;
  toDiscussPage?: (id: number) => void;
}

export interface DiscussType {
  isLoading: boolean;
  switchPage: ReturnType<typeof switchPage>;
  location: RouteComponentProps["location"];
  history: RouteComponentProps["history"];
  fetchArticleForDiscussPage: ReturnType<typeof fetchArticleForDiscussPage>;
  resetIndex?: () => {};
  article: ArticleType;
  comments: CommentType | {};
}

export interface DiscussState {
  article: ArticleType;
}

export interface CommentsType {
  comments: CommentType | {};
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

export interface CommentComponentType {
  comment: CommentType;
  comments: CommentType | {};
}

export interface Selectors {
  homePage: HomePageType;
  discuss: DiscussType;
}

export interface HomePageType {
  fetchArticles: ReturnType<typeof fetchArticles>;
  location: RouteComponentProps["location"];
  articles: ArticleType[];
  currentIndex: number;
  isLoading: boolean;
  history: RouteComponentProps["history"];
  switchPage: ReturnType<typeof switchPage>;
  toggleArticlesCount: ReturnType<typeof toggleArticlesCount>;
  counter: number;
  getUrl?: (string) => string;
  toDiscussPage?: (id: number) => void;
  resetIndex?: () => {};
}

export interface TopicType {
  article: ArticleType;
}

export interface DiscussionType {
  article: ArticleType;
  comments: CommentType | {};
  getUrl?: (string) => string;
  toDiscussPage?: (id: number) => void;
}

export interface ArticleItemType extends RouteComponentProps {
  article: ArticleType;
}

export interface SpaceType {
  toggleView: () => void;
}
