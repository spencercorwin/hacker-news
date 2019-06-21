import React from "react";
import { HeaderType } from "types/types";
import { withRouter } from "react-router";

class Header extends React.PureComponent<HeaderType> {
  changeSort = (stories: string) => {
    this.props.history.push({
      pathname: `${stories}`,
    });
  };

  render() {
    const { location } = this.props;

    const addClassIfActive = path =>
      location.pathname.includes(path) ? " active" : "";

    return (
      <div className="head">
        <span className="title">Almost Hacker News</span>
        <span className="space">|</span>
        <span
          className={`sort${addClassIfActive("topstories")}`}
          onClick={() => this.changeSort("topstories")}
        >
          Top Stories
        </span>
        <span className="space">|</span>
        <span
          className={`sort${addClassIfActive("newstories")}`}
          onClick={() => this.changeSort("newstories")}
        >
          New Stories
        </span>
        <span className="space">|</span>
        <span
          className={`sort${addClassIfActive("beststories")}`}
          onClick={() => this.changeSort("beststories")}
        >
          Best Stories
        </span>
      </div>
    );
  }
}

export const HeaderWrapped = withRouter(Header);
