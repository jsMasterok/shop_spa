import axios from "axios";
import { API } from "./constants";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const addToCart = (
  id: string,
  name: string,
  type: string,
  count: number,
  image: string,
  total_price: number
) => {
  return axios.post(`${API}/cart`, {
    id,
    name,
    type,
    count,
    image,
    total_price,
  });
};

export const deleteCartItem = (id: number) => {
  return axios.delete(`${API}/cart/${id}`);
};
