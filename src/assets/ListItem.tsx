import React from "react";
import { ListItemType } from "../types/types";
import { withRouter } from "react-router";

class ListItem extends React.Component<ListItemType> {
  getUrl = (url: string) => {
    const regex = /(http(s)?:\/\/)|(\/.*){1}/g;
    return url.replace(regex, "");
  };

  switchPage = (id: number) => {
    const { history, switchPage } = this.props;
    console.log("switch page", id, history);
    history.push(`/item/${id}`);
    switchPage(id);
  };

  render() {
    const { article, index } = this.props;

    return (
      <div className="article">
        <div className="left">{index !== -1 && `${index + 1}.`}</div>
        <div className="right">
          <div className="header">
            <span className="title">
              {article && article.url ? (
                <a href={article.url}>{article.title}</a>
              ) : (
                <span onClick={() => this.switchPage(article.id)}>
                  {article.title}
                </span>
              )}
            </span>
            <span className="url">
              {article && article.url && `(${this.getUrl(article.url)})`}
            </span>
          </div>
          <div className="more-info">
            <span className="score" onClick={() => this.switchPage(article.id)}>
              {article.score} points
            </span>
            <span className="points-by">by</span>
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

export const ListItemWrapped = withRouter(ListItem);
