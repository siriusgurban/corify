import $axios from "../../../api/axiosInterceptor";
import $api from "../../../api/endpoint";
import type { IProduct } from "../Models/ShopModels";

export const getProducts = async () => {
  return $axios.get<IProduct[]>($api("get_all_products"));
};

export const getProductsDetails = async (id: string) => {
  return await $axios.get<IProduct>(`${$api("get_single_product")}/${id}`);
};
