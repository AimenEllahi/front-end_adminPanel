import * as api from "../api";
export const getProducts = () => async (dispatch) => {
  try {
    //console.log("jdskbvsjd");
    const { data } = await api.fetchProducts();
    //console.log(data);
    dispatch({ type: "FETCH_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id, navigate) => async (dispatch) => {
  try {
    const { data } = await api.deleteProduct(id);
    navigate("/products");
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (fd) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(fd);
    dispatch({ type: "CREATE_PRODUCT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    // console.log(product.get("productImage"));
    const { data } = await api.updateProduct(id, product);
  } catch (error) {
    console.log(error);
  }
};
