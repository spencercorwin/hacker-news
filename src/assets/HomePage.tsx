import React from "react";
import { StateType } from "../types/types";
import { Header } from "./Header";
import { Content } from "./Content";
import { Discuss } from "./Discuss";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";

export interface HomePageType extends RouteComponentProps<any> {}

class HomePage extends React.Component<HomePageType> {
  state: StateType = {
    list: [],
    articles: [],
    counter: 10,
    isLoading: true,
    currentIndex: 0,
    sortBy: "topstories",
    currentID: 0,
  };

  componentDidMount() {
    this.getArticlesList();
  }

  sortAnotherWay = (stories: string) => {
    this.setState(
      {
        sortBy: stories,
        currentIndex: 0,
        list: [],
        articles: [],
        isLoading: true,
        currentID: 0,
      },
      this.getArticlesList
    );
  };

  getArticlesList = () => {
    const { currentIndex, counter, sortBy } = this.state;

    fetch(`https://hacker-news.firebaseio.com/v0/${sortBy}.json`)
      .then(res => res.json())
      .then(result => {
        const slicedResult = result.slice(currentIndex, currentIndex + counter);
        this.setState({ list: slicedResult }, this.getArticles);
      })
      .catch(reason => console.log(reason));
  };

  getArticles = () => {
    const { list } = this.state;

    list.map(async (number: Number) => {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${number}.json`
      );
      const result = await res.json();
      this.setState((state: StateType) => ({
        articles: [...state.articles, result],
        isLoading: false,
      }));
    });
  };

  nextPage = () => {
    this.setState(
      (state: StateType) => ({
        currentIndex: state.currentIndex + state.counter,
        isLoading: true,
      }),
      this.getArticlesList
    );
  };

  previousPage = () => {
    this.setState(
      (state: StateType) => ({
        currentIndex: state.currentIndex - state.counter,
        isLoading: true,
      }),
      this.getArticlesList
    );
  };

  showNumberOfArticles = (num: number) => {
    this.setState({ counter: num }, this.getArticlesList);
  };

  switchPage = (id?: number) => {
    console.log({ switchpageid: id });
    if (this.state.currentID === 0) {
      this.setState({ currentID: id });
    } else {
      this.setState({ currentID: 0 });
    }
  };

  header = () => {
    const { sortBy } = this.state;
    return <Header sortAnotherWay={this.sortAnotherWay} sortBy={sortBy} />;
  };

  content = () => {
    const { articles, isLoading, currentIndex, counter } = this.state;

    return (
      <Content
        articles={articles.slice(currentIndex, currentIndex + counter)}
        isLoading={isLoading}
        currentIndex={currentIndex}
        switchPage={this.switchPage}
        previousPage={this.previousPage}
        nextPage={this.nextPage}
        showNumberOfArticles={this.showNumberOfArticles}
        counter={counter}
      />
    );
  };

  discuss = () => {
    const { currentID, isLoading } = this.state;

    if (!currentID) {
      return <Redirect to="/" />;
    }

    return (
      <Discuss
        id={currentID}
        isLoading={isLoading}
        switchPage={this.switchPage}
      />
    );
  };

  render() {
    return (
      <div className="app">
        <Route path="/" component={this.header} />
        <Route exact path="/" component={this.content} />
        <Route path="/item" component={this.discuss} />
      </div>
    );
  }
}

export { HomePage };
