import React from "react";
import { DiscussType, CommentType } from "types/types";
import { DiscussDisplayContainer } from "./DisplayContainer";

export class DiscussLogicContainer extends React.Component<DiscussType> {
  childrenCommentsArray = (comments: CommentType | {}, kids: number[]) =>
    Object.values(comments).filter((comment: CommentType) =>
      kids.includes(comment.id)
    );

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
        childrenCommentsArray={this.childrenCommentsArray}
      />
    );
  }
}
