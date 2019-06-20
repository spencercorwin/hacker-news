import React from "react";
import { HomePageDisplayContainerWrapped as HomePageDisplayContainer } from "./DisplayContainer";
import { HomePageType } from "types/types";
import { withRouter } from "react-router";

export class HomePageLogicContainer extends React.Component<HomePageType> {
  render() {
    const { changeSort, sortBy } = this.props;

    return <HomePageDisplayContainer changeSort={changeSort} sortBy={sortBy} />;
  }
}

export const HomePageLogicContainerWrapped = withRouter(HomePageLogicContainer);
