import React from "react";
import { ListItemType } from "types/types";
import { withRouter } from "react-router";
import { ArticleItemWrapped as ArticleItem } from "components/ArticleItem";

class ListItem extends React.Component<ListItemType> {
  render() {
    const { article, index } = this.props;

    return (
      <div className="article">
        <div className="left">{index + 1}</div>
        <div className="right">
          <ArticleItem article={article} />
        </div>
      </div>
    );
  }
}

export const ListItemWrapped = withRouter(ListItem);
