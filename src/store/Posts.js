import {SET_POSTS, ADD_POST, EDIT_POST, DELETE_POST} from '../actions/actionTypes';

export const reducer = (state = [], action) => {
    switch (action.type) {
      case "SET_POSTS"://SET_POSTS:
        return action.posts;
      // case ADD_POST:
      //   return [...state, action.post];
      // case EDIT_POST:
      //   return state.map(post => {
      //     if (post.id === action.updates._id) {
      //       return { ...post, ...action.updates };
      //     } else {
      //       return post;
      //     }
      //   });
      // case DELETE_POST:
      //   return state.filter(post => {
      //     if (post.id !== action.id) {
      //       return post;
      //     }
      //   });
      default:
        return state;
    }
  };
  