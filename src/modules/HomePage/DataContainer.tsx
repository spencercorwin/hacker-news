import React from "react";
import { HomePageLogicContainer } from "./LogicContainer";
import { Selectors, HomePageType } from "types/types";
import { connect } from "react-redux";
import {
  fetchArticles,
  switchPage,
  toggleArticlesCount,
  resetIndex,
} from "./actions";
import { withRouter } from "react-router";

class HomePageDataContainer extends React.Component<HomePageType> {
  componentDidMount = () => {
    const {
      fetchArticles,
      location: { pathname },
    } = this.props;

    fetchArticles(pathname);
  };

  componentDidUpdate(prevProps: HomePageType) {
    const {
      location: { pathname },
      fetchArticles,
    } = this.props;
    if (prevProps.location.pathname !== pathname) {
      fetchArticles(pathname);
    }
  }

  render() {
    const {
      articles,
      currentIndex,
      fetchArticles,
      isLoading,
      location,
      history,
      switchPage,
      toggleArticlesCount,
      counter,
      resetIndex,
    } = this.props;

    return (
      <HomePageLogicContainer
        fetchArticles={fetchArticles}
        location={location}
        articles={articles}
        currentIndex={currentIndex}
        isLoading={isLoading}
        history={history}
        switchPage={switchPage}
        toggleArticlesCount={toggleArticlesCount}
        counter={counter}
        resetIndex={resetIndex}
      />
    );
  }
}

const mapStateToProps = (state: Selectors) => {
  return {
    articles: state.homePage.articles,
    isLoading: state.homePage.isLoading,
    currentIndex: state.homePage.currentIndex,
    counter: state.homePage.counter,
  };
};

export const HomePageDataContainerWrapped = withRouter(
  connect(
    mapStateToProps,
    { fetchArticles, switchPage, toggleArticlesCount, resetIndex }
  )(HomePageDataContainer)
);
