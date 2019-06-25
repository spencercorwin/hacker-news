import React from "react";
import { DiscussType } from "types/types";
import { DiscussDisplayContainer } from "./DisplayContainer";

export class DiscussLogicContainer extends React.Component<DiscussType> {
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
      location,
      history,
      isLoading,
      switchPage,
      fetchArticleForDiscussPage,
      resetIndex,
      comments,
      article,
    } = this.props;
    return (
      <DiscussDisplayContainer
        location={location}
        history={history}
        isLoading={isLoading}
        switchPage={switchPage}
        fetchArticleForDiscussPage={fetchArticleForDiscussPage}
        resetIndex={resetIndex}
        comments={comments}
        article={article}
        toDiscussPage={this.toDiscussPage}
        getUrl={this.getUrl}
      />
    );
  }
}
