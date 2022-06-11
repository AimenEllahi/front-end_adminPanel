import * as api from "../api/index";

export const login = (email, password) => async (dispatch) => {
  try {
    console.log("We are in login");
    const { data } = await api.login(email, password);

    dispatch({ type: "LOGIN", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    //console.log("jdskbvsjd");
    const { data } = await api.fetchUsers();
    // console.log(data);
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
