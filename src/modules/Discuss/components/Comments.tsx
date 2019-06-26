import React from "react";
import { CommentsType, CommentType } from "types/types";
import { withRouter } from "react-router";
import { Comment } from "./Comment";

class Comments extends React.Component<CommentsType> {
  render() {
    const { comments } = this.props;

    console.log({ comments: Object.values(comments) });

    return (
      <div className="">
        {Object.values(comments).map((comment: CommentType) => (
          <Comment
            by={comment.by}
            id={comment.id}
            kids={comment.kids}
            parent={comment.parent}
            text={comment.text}
            time={comment.time}
            type={comment.type}
            key={comment.id}
          />
        ))}
      </div>
    );
  }
}

export const CommentsWrapped = withRouter(Comments);
