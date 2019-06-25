import React from "react";
import { HeaderType } from "types/types";
import { withRouter } from "react-router";

class Header extends React.PureComponent<HeaderType> {
  changeSort = (stories: string) => this.props.history.push(`/${stories}`);

  addClassIfActive = path =>
    this.props.location.pathname.includes(path) ? " active" : "";

  render() {
    return (
      <div className="head">
        <span className="title">Almost Hacker News</span>
        <span className="space">|</span>
        <span
          className={`sort${this.addClassIfActive("topstories")}`}
          onClick={() => this.changeSort("topstories")}
        >
          Top Stories
        </span>
        <span className="space">|</span>
        <span
          className={`sort${this.addClassIfActive("newstories")}`}
          onClick={() => this.changeSort("newstories")}
        >
          New Stories
        </span>
        <span className="space">|</span>
        <span
          className={`sort${this.addClassIfActive("beststories")}`}
          onClick={() => this.changeSort("beststories")}
        >
          Best Stories
        </span>
      </div>
    );
  }
}

export const HeaderWrapped = withRouter(Header);
