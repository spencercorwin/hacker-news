import React from "react";
import { CommentsType, CommentsState } from "../types/types";
import { Comment } from "./Comment";

class Comments extends React.Component<CommentsType> {
  state: CommentsState = {
    comments: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true }, this.getArticle);
  }

  getArticle() {
    const { id } = this.props;

    console.log({ id });

    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(res => res.json())
      .then(result => {
        this.setState({ article: result }, this.getComment);
      })
      .catch(reason => console.log(reason));
  }

  getComment() {
    const { kids } = this.props;

    kids.forEach((id: number) => {
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      )
        .then(res => res.json())
        .then(result => {
          console.log({ result });
          this.setState((state: CommentsState) => ({
            comments: [...state.comments, result],
            isLoading: false,
          }));
        });
    });
  }

  render() {
    const { comments } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="">
        {!isLoading ? (
          comments.map((commentInfo: any) => (
            <Comment
              by={commentInfo.by}
              id={commentInfo.id}
              kids={commentInfo.kids}
              parent={commentInfo.parent}
              text={commentInfo.text}
              time={commentInfo.time}
              type={commentInfo.type}
              key={commentInfo.id}
            />
          ))
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
