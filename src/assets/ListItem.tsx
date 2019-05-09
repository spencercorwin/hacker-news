import React from "react";
import { ListItemType } from "../types/types";

class ListItem extends React.Component<ListItemType> {
  getUrl = (url: string) => {
    const regex = /(http(s)?:\/\/)|(\/.*){1}/g;
    return url.replace(regex, "");
  };

  render() {
    const { article, index } = this.props;

    return (
      <div className="article">
        <div className="left">{index + 1}.</div>
        <div className="right">
          <div className="header">
            <span className="title">
              <a href={article.url}>{article.title}</a>
            </span>
            <span className="url">({this.getUrl(article.url)})</span>
          </div>
          <div className="more-info">
            <span className="score">{article.score}</span>
            <span className="points-by">points by</span>
            <span className="by">{article.by}</span>
          </div>
        </div>
      </div>
    );
  }
}

export { ListItem };
