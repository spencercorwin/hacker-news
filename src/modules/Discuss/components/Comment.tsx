import React from "react";
import { CommentsType, CommentType } from "types/types";
import { CommentContainer } from "./CommentContainer";

export class Comment extends React.Component<CommentsType> {
  toggleView = () => {
    this.props.toggleView && this.props.toggleView();
  };

  render() {
    const { comments, kids, childrenCommentsArray } = this.props;

    if (!kids) {
      return null;
    }

    return (
      <div>
        {childrenCommentsArray(comments, kids).map((comment: CommentType) => {
          return (
            <div key={comment.id}>
              <div
                className="comment"
                dangerouslySetInnerHTML={{
                  __html: comment.text ? comment.text : "",
                }}
              />
              {comment.kids && (
                <CommentContainer
                  comment={comment}
                  comments={comments}
                  childrenCommentsArray={childrenCommentsArray}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
