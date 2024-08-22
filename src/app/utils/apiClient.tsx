import axios from "axios";
import { API, BW_API } from "./constants";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const addToCart = (
  name: string,
  type: string,
  count: number,
  image: string,
  total_price: number
) => {
  return axios.post(`${BW_API}/cart`, {
    name,
    type,
    count,
    image,
    total_price,
  });
};

export const deleteCartItem = (id: any) => {
  return axios.delete(`${API}/cart/${id}`);
};
