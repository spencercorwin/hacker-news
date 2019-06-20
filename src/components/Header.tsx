import React from "react";
import { HeaderType } from "types/types";
import { withRouter } from "react-router";

class Header extends React.PureComponent<HeaderType> {
  changeSort = (stories: string) => {
    // const { changeSort } = this.props;
    // changeSort(stories);
    this.props.history.push(stories);
  };

  render() {
    const { sortBy } = this.props;

    return (
      <div className="head">
        <span className="title">Almost Hacker News</span>
        <span className="space">|</span>
        <span
          className={`sort${sortBy === "topstories" ? " active" : ""}`}
          onClick={() => this.changeSort("topstories")}
        >
          Top Stories
        </span>
        <span className="space">|</span>
        <span
          className={`sort${sortBy === "newstories" ? " active" : ""}`}
          onClick={() => this.changeSort("newstories")}
        >
          New Stories
        </span>
        <span className="space">|</span>
        <span
          className={`sort${sortBy === "beststories" ? " active" : ""}`}
          onClick={() => this.changeSort("beststories")}
        >
          Best Stories
        </span>
      </div>
    );
  }
}

export const HeaderWrapped = withRouter(Header);
