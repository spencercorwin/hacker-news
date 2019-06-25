import React from "react";
import { HomePageDisplayContainer } from "./DisplayContainer";
import { HomePageType } from "types/types";

export class HomePageLogicContainer extends React.Component<HomePageType> {
  getUrl = (url: string) => {
    const regex = /(http(s)?:\/\/)|(\/.*){1}/g;
    return url.replace(regex, "");
  };

  toDiscussPage = (id: number) => {
    const {
      history,
      location: { pathname },
    } = this.props;

    history.push(`${pathname}/${id}`);
  };

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
        getUrl={this.getUrl}
        toDiscussPage={this.toDiscussPage}
      />
    );
  }
}
