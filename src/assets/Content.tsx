import React from "react";
import { ContentType, ArticleType } from "../types/types";
import { ListItem } from "./ListItem";

class Content extends React.PureComponent<ContentType> {
  render() {
    const { isLoading, articles, currentIndex, switchPage } = this.props;

    return (
      <div className="content">
        {!isLoading ? (
          articles.map((article: ArticleType, index) => (
            <ListItem
              key={index + currentIndex}
              article={article}
              index={index + currentIndex}
              switchPage={switchPage}
            />
          ))
        ) : (
          <div className="loading">
            <img
              alt=""
              src="https://cdn.friendbuy.com/widget/images/shared/spinner.svg"
            />
          </div>
        )}
      </div>
    );
  }
}

export { Content };
