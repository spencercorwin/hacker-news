import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { HomePageLogicContainer } from "./LogicContainer";
import { StateType } from "types/types";
import { connect } from "react-redux";
import { switchSortBy } from "./actions";

export interface HomePageType extends RouteComponentProps<any> {
  switchSortBy: any;
}

class HomePageDataContainer extends React.Component<HomePageType> {
  componentDidMount() {
    // this.props.getArticles();
  }
  render() {
    const { switchSortBy } = this.props;

    return <HomePageLogicContainer switchSortBy={switchSortBy} />;
  }
}

const mapStateToProps = (state: StateType) => ({
  switchSortBy: state.sortBy,
});

export const HomePageDataContainerWrapped = connect(
  mapStateToProps,
  {
    switchSortBy,
  }
)(HomePageDataContainer);
