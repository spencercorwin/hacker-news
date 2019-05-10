import React from "react";
import { StateType } from "../types/types";
import { Header } from "./Header";
import { Content } from "./Content";
import { Discuss } from "./Discuss";

class HomePage extends React.Component {
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

  previousPage() {
    this.setState(
      (state: StateType) => ({
        currentIndex: state.currentIndex - state.counter,
        isLoading: true,
      }),
      this.getArticlesList
    );
  }

  showNumberOfArticles(num: number) {
    this.setState({ counter: num }, this.getArticlesList);
  }

  switchPage = (id?: number) => {
    if (this.state.currentID === 0) {
      this.setState({ currentID: id });
    } else {
      this.setState({ currentID: 0 });
    }
  };

  render() {
    const {
      articles,
      currentID,
      isLoading,
      currentIndex,
      counter,
      sortBy,
    } = this.state;

    return (
      <div className="app">
        <Header sortAnotherWay={this.sortAnotherWay} sortBy={sortBy} />
        {currentID === 0 ? (
          <Content
            articles={articles.slice(currentIndex, currentIndex + counter)}
            isLoading={isLoading}
            currentIndex={currentIndex}
            switchPage={this.switchPage}
          />
        ) : (
          <Discuss
            id={currentID}
            isLoading={isLoading}
            switchPage={this.switchPage}
          />
        )}
        {currentID === 0 && (
          <div className="more">
            {currentIndex !== 0 && (
              <>
                <span onClick={() => this.previousPage()}>
                  {currentIndex > 0 ? "Before" : ""}
                </span>
                <span className="space">|</span>
              </>
            )}
            <span onClick={() => this.nextPage()}>Next</span>
            <span className="space">|</span>
            {counter === 10 ? (
              <span onClick={() => this.showNumberOfArticles(20)}>
                Show 20 articles
              </span>
            ) : (
              <span onClick={() => this.showNumberOfArticles(10)}>
                Show 10 articles
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
}

export { HomePage };
