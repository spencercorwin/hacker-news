import React from "react";
import { CommentType } from "../types/types";

class Comment extends React.Component<CommentType> {
  render() {
    return (
      <div
        className="comment"
        dangerouslySetInnerHTML={{
          __html:
            this.props && this.props.text !== undefined ? this.props.text : "",
        }}
      />
    );
  }
}

export { Comment };
