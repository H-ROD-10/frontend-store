import { useQuery } from "react-query";
import axios from "../../helpers/Axios";

const getProducts = async () => {
  const { data } = await axios.get("/api/v1/products");
  return data;
};

export function useProducts() {
  return useQuery("products", getProducts);
}
