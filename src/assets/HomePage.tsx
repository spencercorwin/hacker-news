import React from "react";
import { ListItem } from "./ListItem";
import { StateType, ArticleType } from "../types/types";

class HomePage extends React.Component {
  state: StateType = {
    list: [],
    articles: [],
    loading: false,
  };

  componentDidMount() {
    this.getArticlesList();
  }

  getArticlesList() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(res => res.json())
      .then(result => {
        const slicedResult = result.slice(0, 10);
        this.setState(() => ({ list: slicedResult, loading: true }));
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
        loading: false,
      }));
    });
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <div>
        {!loading
          ? articles.map((article: ArticleType, index) => (
              <ListItem key={index} article={article} index={index} />
            ))
          : "Is loading"}
      </div>
    );
  }
}

export { HomePage };
