import axios from "axios";
import { backendUrl } from "./backendUrl";
import { LOGIN, LOGOUT } from './actionTypes';

let url = backendUrl;

export const login = (username, user_id, is_superuser) => ({
  type: LOGIN,
  username,
  user_id,
  is_superuser
});

export const startLogin = (username, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${url}/api-token-auth/`,
        {
          username,
          password
        }
      );
      console.log(response)
      const user = {
        username: response.data.username,
        user_id: response.data.user_id,
        token: response.data.token,
        is_superuser: response.data.is_superuser
      };
      localStorage.setItem("auth", JSON.stringify(user));

      dispatch(
        login(response.data.username, response.data.user_id, response.data.is_superuser)
      );
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  };
};

export const startLogout = () => {
  return async dispatch => {
    try {
      const { token } = JSON.parse(localStorage.getItem("auth"));
      localStorage.removeItem("auth");
      await axios.delete(
        `${url}/users/me/token`,
        {
          headers: {
            "x-auth": token
          }
        }
      );
      dispatch(logout());
    } catch (e) {
      localStorage.removeItem("auth");
      dispatch(logout());
    }
  };
};

export const logout = () => ({
  type: LOGOUT
});
