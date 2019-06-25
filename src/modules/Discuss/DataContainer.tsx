import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { DiscussType, StateType } from "types/types";
import { DiscussLogicContainer } from "./LogicContainer";
import { switchPage } from "modules/HomePage/actions";
import { fetchArticleForDiscussPage } from "./actions";
import { resetIndex } from "modules/HomePage/actions";

class DiscussDataContainer extends React.Component<DiscussType> {
  componentDidMount() {
    const {
      fetchArticleForDiscussPage,
      location: { pathname },
    } = this.props;

    const id = pathname.split("/")[2];
    fetchArticleForDiscussPage(id);
  }

  componentDidUpdate() {}

  render() {
    const {
      location,
      history,
      isLoading,
      switchPage,
      fetchArticleForDiscussPage,
      resetIndex,
      article,
      comments,
    } = this.props;

    return (
      <DiscussLogicContainer
        location={location}
        history={history}
        isLoading={isLoading}
        switchPage={switchPage}
        fetchArticleForDiscussPage={fetchArticleForDiscussPage}
        resetIndex={resetIndex}
        comments={comments}
        article={article}
      />
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  isLoading: state.discuss.isLoading,
  article: state.discuss.article,
  comments: state.discuss.comments,
});

export const DiscussDataContainerWrapped = withRouter(
  connect(
    mapStateToProps,
    { switchPage, fetchArticleForDiscussPage, resetIndex }
  )(DiscussDataContainer)
);
