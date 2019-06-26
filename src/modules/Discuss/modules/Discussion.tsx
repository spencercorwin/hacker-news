import React from "react";
import { DiscussionType } from "types/types";
import { Comments } from "modules/Discuss/components/Comments";
import { Topic } from "../components/Topic";

export class Discussion extends React.Component<DiscussionType> {
  render() {
    const {
      article,
      article: { kids },
      comments,
    } = this.props;

    return (
      <div className="content">
        <div>
          <Topic article={article} />
          {article.id && <Comments comments={comments} kids={kids} />}
        </div>
      </div>
    );
  }
}
