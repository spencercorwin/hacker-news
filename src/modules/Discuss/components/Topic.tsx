import React from "react";
import { TopicType } from "types/types";

export class Topic extends React.Component<TopicType> {
  render() {
    const { article, toDiscussPage, getUrl } = this.props;

    return (
      <div className="article">
        <div className="right">
          <div className="header">
            <span className="title">
              {article && article.url ? (
                <a href={article.url}>{article.title}</a>
              ) : (
                <span
                  onClick={() => toDiscussPage && toDiscussPage(article.id)}
                >
                  {article.title}
                </span>
              )}
            </span>
            <span className="url">
              {article && article.url && getUrl && getUrl(article.url)}
            </span>
          </div>
          <div className="more-info">
            <span
              className="score"
              onClick={() => toDiscussPage && toDiscussPage(article.id)}
            >
              {article.score} points
            </span>
            <span className="points-by">by</span>
            <span className="by">{article.by}</span>
          </div>
          <div
            className="text"
            dangerouslySetInnerHTML={{
              __html: article && article.text !== undefined ? article.text : "",
            }}
          />
        </div>
      </div>
    );
  }
}
