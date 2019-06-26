import React from "react";
import { HomePageDisplayContainer } from "./DisplayContainer";
import { HomePageType } from "types/types";

export class HomePageLogicContainer extends React.Component<HomePageType> {
  render() {
    const {
      articles,
      currentIndex,
      fetchArticles,
      isLoading,
      location,
      switchPage,
      history,
      toggleArticlesCount,
      counter,
      resetIndex,
    } = this.props;

    return (
      <HomePageDisplayContainer
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
