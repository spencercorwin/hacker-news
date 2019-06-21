import React from "react";
import { HomePageDisplayContainerWrapped as HomePageDisplayContainer } from "./DisplayContainer";
import { HomePageType } from "types/types";
import { withRouter } from "react-router";

export class HomePageLogicContainer extends React.Component<HomePageType> {
  render() {
    return <HomePageDisplayContainer />;
  }
}

export const HomePageLogicContainerWrapped = withRouter(HomePageLogicContainer);
