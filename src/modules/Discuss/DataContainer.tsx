import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { DiscussType, StateType } from "types/types";
import { DiscussLogicContainer } from "./LogicContainer";
import { switchPage } from "modules/HomePage/actions";
import { fetchArticleForDiscussPage } from "./actions";

class DiscussDataContainer extends React.Component<DiscussType> {
  render() {
    const {
      location,
      history,
      isLoading,
      switchPage,
      fetchArticleForDiscussPage,
    } = this.props;

    return (
      <DiscussLogicContainer
        location={location}
        history={history}
        isLoading={isLoading}
        switchPage={switchPage}
        fetchArticleForDiscussPage={fetchArticleForDiscussPage}
      />
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  isLoading: state.discuss.comments.isLoading,
});

export const DiscussDataContainerWrapped = withRouter(
  connect(
    mapStateToProps,
    { switchPage, fetchArticleForDiscussPage }
  )(DiscussDataContainer)
);
