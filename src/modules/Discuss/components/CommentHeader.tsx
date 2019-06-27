import React from "react";
import { CommentHeaderType } from "types/types";

export class CommentHeader extends React.Component<CommentHeaderType> {
  toggleView = () => {
    this.props.toggleView && this.props.toggleView();
  };
  render() {
    const {
      comment: { by },
      isOpen,
    } = this.props;
    return (
      <div className="more-info">
        <span>{by}</span>
        <span>some time ago</span>
        <span onClick={this.toggleView}>{isOpen ? "[-]" : "[+]"}</span>
      </div>
    );
  }
}
