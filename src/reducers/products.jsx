const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      // console.log(action.payload);
      return action.payload;
    case "CREATE_PRODUCTS":
      console.log(action.payload);
      return { ...state, products: [action.payload, ...state.products] };
    default:
      return state;
  }
};
export default reducer;
