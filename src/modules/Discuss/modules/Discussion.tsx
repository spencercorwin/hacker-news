import React from "react";
import { DiscussionType } from "types/types";
import { CommentsWrapped as Comments } from "modules/Discuss/components/Comments";
import { Topic } from "../components/Topic";

export class Discussion extends React.Component<DiscussionType> {
  render() {
    const {
      article,
      comments,
      // switchPage
      toDiscussPage,
      getUrl,
    } = this.props;

    return (
      <div className="">
        <div>
          <Topic
            article={article}
            toDiscussPage={toDiscussPage}
            getUrl={getUrl}
          />
          {article.id && <Comments comments={comments} />}
        </div>
      </div>
    );
  }
}
