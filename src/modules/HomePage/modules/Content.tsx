import React from "react";
import { ContentType, ArticleType } from "types/types";
import { ListItemWrapped as ListItem } from "modules/HomePage/components/ListItem";

export class Content extends React.PureComponent<ContentType> {
  render() {
    const {
      isLoading,
      articles,
      currentIndex,
      switchPage,
      toggleArticlesCount,
      counter,
      location: { pathname },
      getUrl,
      toDiscussPage,
    } = this.props;

    return (
      <div className="content">
        {!isLoading && articles.data.length > 0 ? (
          articles.data.map((article: ArticleType, index) => (
            <ListItem
              key={index + currentIndex}
              article={article}
              index={index + currentIndex}
              getUrl={getUrl}
              toDiscussPage={toDiscussPage}
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
              <span
                onClick={() =>
                  switchPage({
                    direction: "previous",
                    sortBy: pathname,
                  })
                }
              >
                {currentIndex > 0 ? "Before" : ""}
              </span>
              <span className="space">|</span>
            </>
          )}
          <span
            onClick={() => switchPage({ direction: "next", sortBy: pathname })}
          >
            Next
          </span>
          <span className="space">|</span>
          {counter === 10 ? (
            <span onClick={() => toggleArticlesCount(pathname)}>
              Show 20 articles
            </span>
          ) : (
            <span onClick={() => toggleArticlesCount(pathname)}>
              Show 10 articles
            </span>
          )}
        </div>
      </div>
    );
  }
}
