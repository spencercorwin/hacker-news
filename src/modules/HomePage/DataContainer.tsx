import React from "react";
import { HomePageLogicContainer } from "./LogicContainer";
import { StateType, HomePageType } from "types/types";
import { connect } from "react-redux";
import { changeSort } from "./actions";

class HomePageDataContainer extends React.Component<HomePageType> {
  render() {
    const { changeSort, sortBy } = this.props;

    return <HomePageLogicContainer changeSort={changeSort} sortBy={sortBy} />;
  }
}

const mapStateToProps = (state: StateType) => ({
  sortBy: state.sortBy,
});

export const HomePageDataContainerWrapped = connect(
  mapStateToProps,
  {
    changeSort,
  }
)(HomePageDataContainer);
