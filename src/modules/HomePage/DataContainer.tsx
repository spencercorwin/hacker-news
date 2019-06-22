import React from "react";
import { HomePageLogicContainer } from "./LogicContainer";
import { StateType, HomePageType } from "types/types";
import { connect } from "react-redux";
import { fetchArticles } from "./actions";
import { withRouter } from "react-router";

class HomePageDataContainer extends React.Component<HomePageType> {
  render() {
    const {
      articles,
      currentIndex,
      fetchArticles,
      isLoading,
      location,
      history,
    } = this.props;

    return (
      <HomePageLogicContainer
        fetchArticles={fetchArticles}
        location={location}
        articles={articles}
        currentIndex={currentIndex}
        isLoading={isLoading}
        history={history}
      />
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  articles: state.articles,
  isLoading: state.articles.isLoading || state.list.isLoading,
  currentIndex: state.currentIndex,
  counter: state.counter,
});

export const HomePageDataContainerWrapped = withRouter(
  connect(
    mapStateToProps,
    { fetchArticles }
  )(HomePageDataContainer)
);
