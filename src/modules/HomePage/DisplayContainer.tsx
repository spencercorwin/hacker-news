import React from "react";
import { HeaderWrapped as Header } from "components/Header";
import { Content } from "modules/HomePage/modules/Content";
import { Route } from "react-router-dom";
import { HomePageType } from "types/types";
import { IsLoading } from "components/IsLoading";

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
    } = this.props;

    if (isLoading) {
      return <IsLoading />;
    }

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
