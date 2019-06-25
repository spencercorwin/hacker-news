import React from "react";
import { DiscussType } from "types/types";
// import { ListItemWrapped as ListItem } from "components/ListItem";
import { CommentsWrapped as Comments } from "components/Comments";

export class Discuss extends React.Component<DiscussType> {
  componentDidMount() {}

  getArticle() {}

  render() {
    const {
      isLoading,
      // switchPage
    } = this.props;

    return (
      <div className="">
        {!isLoading ? (
          <div>
            {/* <ListItem article={article} index={-1} switchPage={switchPage} />
            {article.id && (
              <Comments
                isLoading={isLoading}
                kids={article.kids ? article.kids : []}
                id={article.id}
              /> */}
            <Comments />
            )}
          </div>
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
