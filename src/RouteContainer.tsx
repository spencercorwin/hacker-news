import React from "react";
import { HomePageDataContainerWrapped as HomePage } from "modules/HomePage/DataContainer";
import { DiscussDataContainerWrapped as Discuss } from "modules/Discuss/DataContainer";
import { withRouter, RouteComponentProps, Redirect } from "react-router";

export interface RouteContainerType extends RouteComponentProps<{}> {}

class RouteContainer extends React.Component<RouteContainerType> {
  render() {
    const {
      location: { pathname },
    } = this.props;

    if (pathname === "/") {
      return <Redirect to="topstories" />;
    }

    if (pathname.split("/")[2]) {
      return <Discuss />;
    }

    return <HomePage />;
  }
}

export const RouteContainerWrapped = withRouter(RouteContainer);
