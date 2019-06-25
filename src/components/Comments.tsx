import React from "react";
import { CommentsType } from "types/types";
// import { Comment } from "components/Comment";
import { withRouter } from "react-router";

class Comments extends React.Component<CommentsType> {
  // getArticle() {
  //   const { id } = this.props.location;

  //   fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  //     .then(res => res.json())
  //     .then(result => {
  //       this.setState({ article: result }, this.getComment);
  //     })
  //     .catch(reason => console.log(reason));
  // }

  getComment() {
    // const { kids } = this.props;
    // kids.forEach((id: number) => {
    //   fetch(
    //     `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    //   )
    //     .then(res => res.json())
    //     .then(result => {
    //       this.setState((state: CommentsState) => ({
    //         comments: [...state.comments, result],
    //         isLoading: false,
    //       }));
    //     });
    // });
  }

  render() {
    // const { comments } = this.state;

    return (
      <div className="">
        comments
        {/* {comments.map((commentInfo: any) => (
          <Comment
            by={commentInfo.by}
            id={commentInfo.id}
            kids={commentInfo.kids}
            parent={commentInfo.parent}
            text={commentInfo.text}
            time={commentInfo.time}
            type={commentInfo.type}
            key={commentInfo.id}
          />
        ))} */}
      </div>
    );
  }
}

export const CommentsWrapped = withRouter(Comments);
