import React from "react";
import { TopicType } from "types/types";
import { ArticleItemWrapped as ArticleItem } from "components/ArticleItem";

export class Topic extends React.Component<TopicType> {
  render() {
    const { article } = this.props;

    return (
      <div className="article">
        <div className="right">
          <ArticleItem article={article} />
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
