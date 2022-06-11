import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./actions/products";
import { getUsers } from "./actions/auth";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  });
  useEffect(() => {
    dispatch(getUsers());
  });

  const routing = useRoutes(Themeroutes);

  return <div className='dark'>{routing}</div>;
};

export default App;
