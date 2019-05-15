import React from "react";
import { ListItemType } from "../types/types";
import { Link } from "react-router-dom";

class ListItem extends React.Component<ListItemType> {
  getUrl = (url: string) => {
    const regex = /(http(s)?:\/\/)|(\/.*){1}/g;
    return url.replace(regex, "");
  };

  switchPage = id => {
    this.props.switchPage(id);
  };

  render() {
    const { article, index } = this.props;

    return (
      <div className="article">
        <div className="left">{index === -1 ? "" : `${index + 1}.`}</div>
        <div className="right">
          <div className="header">
            <span className="title">
              {article && article.url ? (
                <a href={article.url}>{article.title}</a>
              ) : (
                <Link to="/item" onClick={() => this.switchPage(article.id)}>
                  {article.title}
                </Link>
              )}
            </span>
            <span className="url">
              {article && article.url ? `(${this.getUrl(article.url)})` : ""}
            </span>
          </div>
          <div className="more-info">
            <span className="score">{article.score}</span>
            <span className="points-by">points by</span>
            <span className="by">{article.by}</span>
          </div>
          {index === -1 && (
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html:
                  article && article.text !== undefined ? article.text : "",
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export { ListItem };
