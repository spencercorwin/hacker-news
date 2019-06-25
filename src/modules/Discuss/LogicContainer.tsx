import React from "react";
import { DiscussType } from "types/types";
import { DiscussDisplayContainer } from "./DisplayContainer";

export class DiscussLogicContainer extends React.Component<DiscussType> {
  render() {
    const {
      location,
      history,
      isLoading,
      switchPage,
      fetchArticleForDiscussPage,
    } = this.props;
    return (
      <DiscussDisplayContainer
        location={location}
        history={history}
        isLoading={isLoading}
        switchPage={switchPage}
        fetchArticleForDiscussPage={fetchArticleForDiscussPage}
      />
    );
  }
}
