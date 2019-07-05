import { LOGIN, LOGOUT } from '../actions/actionTypes';

const defaultAuthState = () => {
    if (localStorage.getItem("auth")) {
      return JSON.parse(localStorage.getItem("auth"));
    } else {
      return {};
    }
  };
  

  export const reducer = (state = defaultAuthState(), action) => {
    switch (action.type) {
      case LOGIN:
        return {
          username: action.username,
          user_id: action.user_id,
          is_superuser: action.is_superuser
        };
      case LOGOUT:
        return {};
      default:
        return state;
    }
  };
