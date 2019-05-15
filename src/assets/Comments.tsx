import React from "react";
import { CommentsType, CommentsState } from "../types/types";

class Comments extends React.Component<CommentsType> {
  state: CommentsState = {};

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
    const { isLoading } = this.props;

    return (
      <div className="">
        {!isLoading ? (
          <div>comments</div>
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

export { Comments };
