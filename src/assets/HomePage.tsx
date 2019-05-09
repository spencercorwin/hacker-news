import React from "react";

interface State {
  list: [];
  articles: { id: string; title: string }[];
}

class HomePage extends React.Component {
  state: State = {
    list: [],
    articles: [],
  };

  componentDidMount() {
    this.getArticlesList();
  }

  getArticlesList() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(res => res.json())
      .then(result => {
        const slicedResult = result.slice(0, 9);
        this.setState({ list: slicedResult });
        this.getArticles();
      });
  }

  getArticles() {
    const { list } = this.state;

    list.map((number: Number) => {
      return fetch(
        `https://hacker-news.firebaseio.com/v0/item/${number}.json?print=pretty`
      )
        .then(res => res.json())
        .then(result => {
          this.setState({ articles: [...this.state.articles, result] });
        });
    });
  }

  render() {
    const { articles } = this.state;

    console.log({ articles });

    return (
      <div>
        {articles.map(num => (
          <div key={num.id}>{num.title}</div>
        ))}
      </div>
    );
  }
}

export { HomePage };
