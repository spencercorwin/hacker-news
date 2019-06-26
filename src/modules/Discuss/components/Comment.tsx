import React from "react";
import { CommentComponentType } from "types/types";
import { Space } from "./Space";
import { Comments } from "./Comments";

export class Comment extends React.Component<CommentComponentType> {
  state = {
    isOpen: true,
  };

  toggleView = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    const {
      comment: { id, kids },
      comments,
    } = this.props;

    if (!isOpen) {
      return <div onClick={this.toggleView}>+</div>;
    }

    return (
      <div
        className="comments-container"
        key={comments[id].parent + comments[id].id}
      >
        <Space toggleView={this.toggleView} />
        <Comments comments={comments} kids={kids} />
      </div>
    );
  }
}
