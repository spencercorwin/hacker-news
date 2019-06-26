import React from "react";
import { ContentType, ArticleType } from "types/types";
import { ListItemWrapped as ListItem } from "modules/HomePage/components/ListItem";

export class Content extends React.PureComponent<ContentType> {
  switchPage = ({ direction, sortBy }) => {
    this.props.switchPage({ direction, sortBy });
  };

  onKeyDownSwitchPage = (event: React.KeyboardEvent, { direction, sortBy }) => {
    if (event.key !== "Enter") {
      return;
    }
    this.switchPage({ direction, sortBy });
  };

  toggleArticlesCount = pathname => {
    this.props.toggleArticlesCount(pathname);
  };

  onKeyDownToggleArticlesCount = (event: React.KeyboardEvent, pathname) => {
    if (event.key !== "Enter") {
      return;
    }
    this.toggleArticlesCount(pathname);
  };

  render() {
    const {
      articles,
      currentIndex,
      counter,
      location: { pathname },
    } = this.props;

    return (
      <div className="content">
        {articles.map((article: ArticleType, index) => (
          <ListItem
            key={index + currentIndex}
            article={article}
            index={index + currentIndex}
          />
        ))}
        <div className="more">
          {currentIndex !== 0 && (
            <>
              <span
                onClick={() =>
                  this.switchPage({
                    direction: "previous",
                    sortBy: pathname,
                  })
                }
                onKeyDown={event =>
                  this.onKeyDownSwitchPage(event, {
                    direction: "next",
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
            onClick={() =>
              this.switchPage({ direction: "next", sortBy: pathname })
            }
            onKeyDown={event =>
              this.onKeyDownSwitchPage(event, {
                direction: "next",
                sortBy: pathname,
              })
            }
            tabIndex={0}
          >
            Next
          </span>
          <span className="space">|</span>
          {counter === 10 ? (
            <span
              onClick={() => this.toggleArticlesCount(pathname)}
              tabIndex={0}
              onKeyDown={event =>
                this.onKeyDownToggleArticlesCount(event, pathname)
              }
            >
              Show 20 articles
            </span>
          ) : (
            <span
              onClick={() => this.toggleArticlesCount(pathname)}
              tabIndex={0}
              onKeyDown={event =>
                this.onKeyDownToggleArticlesCount(event, pathname)
              }
            >
              Show 10 articles
            </span>
          )}
        </div>
      </div>
    );
  }
}
