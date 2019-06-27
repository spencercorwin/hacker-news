import React from "react";
import { CommentHeaderType } from "types/types";

export class CommentHeader extends React.Component<CommentHeaderType> {
  toggleView = () => {
    this.props.toggleView && this.props.toggleView();
  };
  render() {
    const {
      comment: { by, id, parent },
      isOpen,
    } = this.props;
    return (
      <div className="more-info">
        <span className={`id: ${id}, parent: ${parent}`}>{by}</span>
        <span>some time ago</span>
        <span className="cursor" onClick={this.toggleView}>
          {isOpen ? "[-]" : "[+]"}
        </span>
      </div>
    );
  }
}
