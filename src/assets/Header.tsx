import React from "react";
import { HeaderType } from "../types/types";

class Header extends React.PureComponent<HeaderType> {
  sortAnotherWay = (stories: string) => {
    this.props.sortAnotherWay(stories);
  };

  render() {
    return (
      <div className="head">
        <span className="title">Almost Hacker News</span>
        <span className="space">|</span>
        <span
          className="sort"
          onClick={() => this.sortAnotherWay("topstories")}
        >
          Top Stories
        </span>
        <span className="space">|</span>
        <span
          className="sort"
          onClick={() => this.sortAnotherWay("newstories")}
        >
          New Stories
        </span>
        <span className="space">|</span>
        <span
          className="sort"
          onClick={() => this.sortAnotherWay("beststories")}
        >
          Best Stories
        </span>
        <span className="space">|</span>
      </div>
    );
  }
}

export { Header };
