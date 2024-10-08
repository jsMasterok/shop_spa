import apiClient from "../utils/apiClient";
import postApiClient from "../utils/postApiClient";

export const getWishes = () => {
  return apiClient
    .get("/products")
    .then(({ data: wishes }) => {
      return wishes.data;
    })
    .catch((error) => {
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    });
};

export const getSellers = () => {
  return apiClient
    .get("/sales-channels")
    .then(({ data: sellers }) => {
      return sellers.data;
    })
    .catch((error) => {
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    });
};

export const createOrder = (orderData: any) => {
  return apiClient.post("/orders", orderData);
};
