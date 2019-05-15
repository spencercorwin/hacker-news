import React from "react";
import { ContentType, ArticleType } from "../types/types";
import { ListItem } from "./ListItem";

class Content extends React.PureComponent<ContentType> {
  render() {
    const {
      isLoading,
      articles,
      currentIndex,
      switchPage,
      previousPage,
      nextPage,
      counter,
      showNumberOfArticles,
    } = this.props;

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
        <div className="more">
          {currentIndex !== 0 && (
            <>
              <span onClick={() => previousPage()}>
                {currentIndex > 0 ? "Before" : ""}
              </span>
              <span className="space">|</span>
            </>
          )}
          <span onClick={() => nextPage()}>Next</span>
          <span className="space">|</span>
          {counter === 10 ? (
            <span onClick={() => showNumberOfArticles(20)}>
              Show 20 articles
            </span>
          ) : (
            <span onClick={() => showNumberOfArticles(10)}>
              Show 10 articles
            </span>
          )}
        </div>
      </div>
    );
  }
}

export { Content };
