import React from "react";
import { HeaderWrapped as Header } from "components/Header";
import { Content } from "modules/HomePage/modules/Content";
import { Route } from "react-router-dom";
import { HomePageType } from "types/types";

export class HomePageDisplayContainer extends React.Component<HomePageType> {
  content = () => {
    const {
      articles,
      isLoading,
      currentIndex,
      fetchArticles,
      location,
      switchPage,
      toggleArticlesCount,
      counter,
      getUrl,
      toDiscussPage,
    } = this.props;

    return (
      <Content
        articles={articles}
        isLoading={isLoading}
        currentIndex={currentIndex}
        switchPage={switchPage}
        fetchArticles={fetchArticles}
        location={location}
        toggleArticlesCount={toggleArticlesCount}
        counter={counter}
        getUrl={getUrl}
        toDiscussPage={toDiscussPage}
      />
    );
  };

  render() {
    return (
      <div className="app">
        <Header resetIndex={this.props.resetIndex} />
        <Route exact path="/**/" component={this.content} />
      </div>
    );
  }
}
