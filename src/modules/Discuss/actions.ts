export const FetchArticleStart = "DISCUSS::FETCH_ARTICLE_START";
export const ReceiveArticle = "DISCUSS::RECEIVE_ARTICLE";
export const ReceiveComments = "DISCUSS::RECEIVE_COMMENTS";
export const RequestComments = "DISCUSS::REQUEST_COMMENTS";

export const fetchArticleStart = () => ({
  type: FetchArticleStart,
});

export const receiveArticle = json => ({
  type: ReceiveArticle,
  json,
});

export const receiveComments = array => ({
  type: ReceiveComments,
  array,
});

export const requestComments = () => ({
  type: RequestComments,
});

export const getComments = () => (dispatch, getState) => {
  const {
    article: { kids },
  } = getState().discuss;

  if (!kids) {
    return;
  }

  dispatch(requestComments());
  const comments: any = [];

  kids.forEach((id: number) => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(res => res.json())
      .then(result => {
        comments.push(result);
        if (kids.length === comments.length) {
          dispatch(receiveComments(comments));
        }
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
