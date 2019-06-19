import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { HomePageDisplayContainer } from "./DisplayContainer";

export interface HomePageType extends RouteComponentProps<any> {
  switchSortBy: any;
}

export class HomePageLogicContainer extends React.Component<HomePageType> {
  render() {
    const { switchSortBy } = this.props;

    return <HomePageDisplayContainer switchSortBy={switchSortBy} />;
  }
}
