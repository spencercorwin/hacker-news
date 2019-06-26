import React from "react";
import { CommentsType, CommentType } from "types/types";
import { Comment } from "./Comment";

export class Comments extends React.Component<CommentsType> {
  render() {
    const { comments, kids } = this.props;
    const kidsArray = Object.values(comments).filter((comment: CommentType) =>
      kids.includes(comment.id)
    );

    return (
      <div>
        {kidsArray.map((comment: CommentType) => {
          return (
            <div key={comment.id}>
              <div
                className={`parent: ${comment.parent} id: ${comment.id}`}
                dangerouslySetInnerHTML={{
                  __html: comment.text ? comment.text : "",
                }}
              />
              {comment.kids && (
                <Comment comment={comment} comments={comments} />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
