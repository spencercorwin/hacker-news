export const FetchArticleStart = "DISCUSS::FETCH_ARTICLE_START";
export const ReceiveArticle = "DISCUSS::RECEIVE_ARTICLE";
export const ReceiveComment = "DISCUSS::RECEIVE_COMMENT";

export const fetchArticleStart = () => ({
  type: FetchArticleStart,
});

export const receiveArticle = json => ({
  type: ReceiveArticle,
  json,
});

export const receiveComment = json => ({
  type: receiveComment,
  json,
});

export const getComments = () => (dispatch, getState) => {
  const {
    comments: { data },
  } = getState().discuss;
  data.forEach((id: number) => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(res => res.json())
      .then(result => {
        dispatch(receiveArticle(result));
      });
  });
};

export const fetchArticleForDiscussPage = (id: number) => dispatch => {
  dispatch(fetchArticleStart());
  return fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  )
    .then(res => res.json())
    .then(result => {
      dispatch(receiveArticle(result));
      dispatch(getComments());
    });
};

// getArticle() {
//   const { id } = this.props.location;

//   fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
//     .then(res => res.json())
//     .then(result => {
//       this.setState({ article: result }, this.getComment);
//     })
//     .catch(reason => console.log(reason));
// }

// getComment() {
//   const { kids } = this.props;

//   kids.forEach((id: number) => {
//     fetch(
//       `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
//     )
//       .then(res => res.json())
//       .then(result => {
//         this.setState((state: CommentsState) => ({
//           comments: [...state.comments, result],
//           isLoading: false,
//         }));
//       });
//   });
// }
