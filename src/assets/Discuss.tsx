import React from "react";
import { DiscussType, DiscussState } from "../types/types";
import { ListItem } from "./ListItem";

class Discuss extends React.Component<DiscussType> {
  state: DiscussState = {
    article: {
      by: "",
      descendants: 0,
      id: 0,
      kids: [],
      score: 0,
      time: 0,
      title: "",
      type: "",
      url: "",
    },
  };

  componentDidMount() {
    this.setState({ isLoading: true }, this.getArticle);
  }

  getArticle() {
    const { id } = this.props;

    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(res => res.json())
      .then(result => {
        this.setState({ article: result, isLoading: false });
      })
      .catch(reason => console.log(reason));
  }

  render() {
    const { article } = this.state;
    const { isLoading, switchPage } = this.props;

    return (
      <div className="">
        {!isLoading ? (
          <div>
            <ListItem article={article} index={-1} switchPage={switchPage} />
          </div>
        ) : (
          <div className="loading">
            <img
              alt=""
              src="https://cdn.friendbuy.com/widget/images/shared/spinner.svg"
            />
          </div>
        )}
      </div>
    );
  }
}

export { Discuss };
