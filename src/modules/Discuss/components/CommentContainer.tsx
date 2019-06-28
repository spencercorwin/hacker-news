import React from "react";
import { CommentComponentType } from "types/types";
import { Space } from "./Space";
import { Comment } from "./Comment";
import { CommentHeader } from "./CommentHeader";

export class CommentContainer extends React.Component<CommentComponentType> {
  state = {
    isOpen: true,
  };

  toggleView = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    const {
      comment: { id },
      comment,
      comments,
      childrenCommentsArray,
      isFirstRender = false,
    } = this.props;

    return (
      <div className="comments-container" key={comments[id].id}>
        {!isFirstRender && <Space toggleView={this.toggleView} />}
        <div>
          <CommentHeader
            isOpen={isOpen}
            comment={comment}
            toggleView={this.toggleView}
          />
          {isOpen && (
            <Comment
              comments={comments}
              comment={comment}
              isFirstRender={isFirstRender}
              toggleView={this.toggleView}
              isOpen={isOpen}
              childrenCommentsArray={childrenCommentsArray}
            />
          )}
        </div>
      </div>
    );
  }
}
