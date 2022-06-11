const reducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      if (action.payload.user.role === "admin") {
        localStorage.setItem("AuthTokenAdmin", action?.payload.token);
      }
      window.location.href = "/";
      return state;
    case "FETCH_USERS":
      console.log(action.payload);
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default reducer;
