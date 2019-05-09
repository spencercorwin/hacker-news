import React from "react";
import { StateType } from "../types/types";
import { Header } from "./Header";
import { Content } from "./Content";

class HomePage extends React.Component {
  state: StateType = {
    list: [],
    articles: [],
    counter: 10,
    isLoading: true,
    currentIndex: 0,
    sortBy: "topstories",
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
      },
      this.getArticlesList
    );
  };

  getArticlesList() {
    const { currentIndex, counter, sortBy } = this.state;

    fetch(`https://hacker-news.firebaseio.com/v0/${sortBy}.json`)
      .then(res => res.json())
      .then(result => {
        const slicedResult = result.slice(currentIndex, currentIndex + counter);
        this.setState({ list: slicedResult }, this.getArticles);
      })
      .catch(reason => console.log(reason));
  }

  getArticles() {
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
  }

  nextPage() {
    this.setState(
      (state: StateType) => ({
        currentIndex: state.currentIndex + state.counter,
        isLoading: true,
      }),
      this.getArticlesList
    );
  }

  render() {
    const { articles, isLoading, currentIndex, counter, sortBy } = this.state;

    return (
      <div className="app">
        <Header sortAnotherWay={this.sortAnotherWay} sortBy={sortBy} />
        <Content
          articles={articles.slice(currentIndex, currentIndex + counter)}
          isLoading={isLoading}
          currentIndex={currentIndex}
        />
        <div className="more" onClick={() => this.nextPage()}>
          More
        </div>
      </div>
    );
  }
}

export { HomePage };
