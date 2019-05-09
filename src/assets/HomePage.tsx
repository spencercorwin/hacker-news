import React from "react";
import { ListItem } from "./ListItem";
import { StateType, ArticleType } from "../types/types";

class HomePage extends React.Component {
  state: StateType = {
    list: [],
    articles: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getArticlesList();
  }

  getArticlesList(incomingList?: number) {
    const { isLoading } = this.state;
    const incomingListAdder = incomingList ? incomingList : 0;
    const adder = !isLoading && incomingList ? 0 : 10;
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(res => res.json())
      .then(result => {
        const slicedResult = result.slice(0, incomingListAdder + adder);
        this.setState(() => ({ list: slicedResult, isLoading: true }));
        this.getArticles();
      })
      .catch(reason => console.log(reason));
  }

  getArticles() {
    const { list } = this.state;

    list.map(async (number: Number) => {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${number}.json?print=pretty`
      );
      const result = await res.json();
      this.setState((state: StateType) => ({
        articles: [...state.articles, result],
        isLoading: false,
      }));
    });
  }

  render() {
    const { articles, isLoading, list } = this.state;

    console.log({ list, length: list.length });

    return (
      <div>
        {!isLoading
          ? articles.map((article: ArticleType, index) => (
              <ListItem key={index} article={article} index={index} />
            ))
          : "Is loading"}
        <div className="more" onClick={() => this.getArticlesList(list.length)}>
          More
        </div>
      </div>
    );
  }
}

export { HomePage };
