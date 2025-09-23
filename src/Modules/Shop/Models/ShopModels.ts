export interface IProduct {
  _id: string;
  name: string;
  details: string;
  price: number;
  productImage: string;
  __v: number;
  quantity?: number;
}

export enum SetProductCountEnum {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

export interface IProductParams {
  productId: string;
  countType: SetProductCountEnum;
}
