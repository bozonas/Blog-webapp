import axios from "axios";
import { backendUrl } from "./backendUrl";
import { SET_POSTS, ADD_POST, EDIT_POST, DELETE_POST } from './actionTypes';

let url = backendUrl;

export const setPosts = posts => ({
  type: "SET_POSTS",//SET_POSTS,
  posts
});

export const startSetPosts = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        `${url}/api/posts/`
      );
      dispatch(setPosts(response.data));
    } catch (e) {
      throw new Error("Could not retrieve posts...");
    }
  };
};

export const addPost = post => ({
  type: ADD_POST,
  post
});

export const startAddPost = post => {
  return async dispatch => {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    try {
      const response = await axios({
        url: `${url}/api/posts/`,
        method: "post",
        headers: {
          "x-auth": token
        },
        data: post
      });

      dispatch(addPost(response.data.post));
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  };
};

// export const editPost = updates => ({
//   type: EDIT_POST,
//   updates
// });

// export const startEditPost = (post, id) => {
//   return async dispatch => {
//     const { token } = JSON.parse(localStorage.getItem("auth"));
//     try {
//       const response = await axios({
//         url: `${url}/api/posts/${id}`,
//         method: "patch",
//         headers: {
//           "x-auth": token
//         },
//         data: post
//       });

//       dispatch(editPost(response.data.post));
//     } catch (e) {
//       throw new Error(e.response.data.error);
//     }
//   };
// };

// export const deletePost = id => ({
//   type: DELETE_POST,
//   id
// });

// export const startDeletePost = id => {
//   return async dispatch => {
//     const { token } = JSON.parse(localStorage.getItem("auth"));
//     try {
//       const response = await axios({
//         url: `${url}/api/posts/${id}/`,
//         method: "delete",
//         headers: {
//           "x-auth": token
//         }
//       });

//       dispatch(deletePost(id));
//     } catch (e) {
//       throw new Error(e.response.data.error);
//     }
//   };
// };
