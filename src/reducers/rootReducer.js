const initState = {
  posts: [
    { id: '1', title: 'title 1', body: 'lorem ipsum ion;asdj asoirqwei ' },
    { id: '2', title: 'title 2', body: 'ipusum ipsum ion;asdj asoirqwei ' },
    { id: '3', title: 'title 3', body: 'marijana ipsum ion;asdj asoirqwei ' }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
