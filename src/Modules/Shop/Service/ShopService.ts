import * as ShopProvider from "../Provider/ShopProvider";

export class ShopService {
  static async productList() {
    return await ShopProvider.getProducts().then((res) => {
      return res.data.map((item) => ({
        ...item,
        productImage: item.productImage,
      }));
    });
  }
  static async productDetails(id: string) {
    return await ShopProvider.getProductsDetails(id).then((res) => {

      console.log(res.data, "res.data");
      
      return res.data;
    });
  }
}
