import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8800",
  // baseURL: "https://project-api-ecommerce.herokuapp.com/",
});
const token = localStorage.getItem("AuthTokenAdmin");
const config = {
  headers: { Authorization: `${token}`, "content-type": "multipart/form-data" },
};

//export const register = (user) => API.post("/users/register", user);
export const login = (email, password) =>
  API.post("/users/login", { email, password });
export const fetchProducts = () => API.get("/products");
export const fetchProduct = (id) => API.get(`/products/${id}`);
export const createProduct = (fd) => API.post("/products", fd, config);
export const updateProduct = (id, product) =>
  API.patch(`/products/${id}`, product, config);

export const fetchUsers = () => API.get("/Users/user", config);

export const deleteProduct = (id) => API.delete(`/products/${id}`, config);
