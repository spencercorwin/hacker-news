import React from "react";
import { HomePageLogicContainerWrapped as HomePageLogicContainer } from "./LogicContainer";
import { StateType, HomePageType } from "types/types";
import { connect } from "react-redux";

class HomePageDataContainer extends React.Component<HomePageType> {
  render() {
    return <HomePageLogicContainer />;
  }
}

const mapStateToProps = (state: StateType) => ({
  sortBy: state.sortBy,
});

export const HomePageDataContainerWrapped = connect(
  mapStateToProps,
  {}
)(HomePageDataContainer);
