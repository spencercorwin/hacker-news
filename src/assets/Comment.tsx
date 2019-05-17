import React from "react";
import { CommentType } from "../types/types";

class Comment extends React.Component<CommentType> {
  render() {
    return <div className="comment">{this.props.text}</div>;
  }
}

export { Comment };
