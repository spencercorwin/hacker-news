import React from "react";
import { SpaceType } from "types/types";

export class Space extends React.PureComponent<SpaceType> {
  render() {
    const { toggleView } = this.props;
    return (
      <div className="comment-space" onClick={toggleView}>
        <div />
      </div>
    );
  }
}
