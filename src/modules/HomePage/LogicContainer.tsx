import React from "react";
import { HomePageDisplayContainer } from "./DisplayContainer";
import { HomePageType } from "types/types";

export class HomePageLogicContainer extends React.Component<HomePageType> {
  render() {
    const { changeSort, sortBy } = this.props;

    return <HomePageDisplayContainer changeSort={changeSort} sortBy={sortBy} />;
  }
}
