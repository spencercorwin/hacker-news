import React from "react";
import { HeaderType } from "types/types";

class Header extends React.PureComponent<HeaderType> {
  changeSort = (stories: string) => {
    const { changeSort } = this.props;
    changeSort(stories);
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

export { Header };
