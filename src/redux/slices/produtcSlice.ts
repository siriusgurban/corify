import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  SetProductCountEnum,
  type IProduct,
  type IProductParams,
} from "../../Modules/Shop/Models/ShopModels";
import showNotification from "../../utils/notification";
// Define a type for the slice state
export interface IProductState {
  cart: IProduct[];
  cartCount: number;
  totalPrice: number;
}

// --- utils/localStorage.ts ---
export const loadCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
};

export const loadCartCount = () => {
  try {
    return JSON.parse(localStorage.getItem("cartCount") || "0");
  } catch {
    return 0;
  }
};

export const loadTotalPrice = () => {
  try {
    return JSON.parse(localStorage.getItem("totalPrice") || "0");
  } catch {
    return 0;
  }
};

export const saveCart = (cart: any) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const saveCartCount = (count: number) => {
  localStorage.setItem("cartCount", JSON.stringify(count));
};

export const saveTotalPrice = (price: number) => {
  localStorage.setItem("totalPrice", JSON.stringify(price));
};

const initialState: IProductState = {
  cart: loadCart(),
  cartCount: loadCartCount(),
  totalPrice: loadTotalPrice(),
};

export const productSlice = createSlice({
  name: "productSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    calculateCartCount: (state) => {
      state.cartCount = state.cart.reduce(
        (acc, curr) => acc + (curr.quantity || 0),
        0
      );
    },
    calculateCartTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce(
        (acc, curr) => acc + curr.price * (curr.quantity || 0),
        0
      );
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existing) {
        state.cart.filter((item) => {
          if (item._id === existing._id && item.quantity) {
            return { ...item, quantity: item.quantity++ };
          } else {
            return item;
          }
        });
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
      saveCart(state.cart);
      saveCartCount(state.cartCount);
      saveTotalPrice(state.totalPrice);
      showNotification("success", "Sebete elave olundu !");
    },
    setProductCount: (state, action: PayloadAction<IProductParams>) => {
      const findedProduct = state.cart.find(
        (item) => item._id === action.payload.productId
      );
      switch (action.payload.countType) {
        case SetProductCountEnum.INCREMENT:
          state.cart = state.cart.filter((item) => {
            if (item._id === findedProduct?._id && item.quantity) {
              return { ...item, quantity: item.quantity++ };
            } else {
              return item;
            }
          });
          break;
        case SetProductCountEnum.DECREMENT:
          state.cart = state.cart.filter((item) => {
            if (
              item._id === findedProduct?._id &&
              item.quantity &&
              item.quantity > 1
            ) {
              return { ...item, quantity: item.quantity-- };
            } else {
              return item;
            }
          });
          break;
        default:
          console.log("Error");
      }
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
      saveCart(state.cart);
      saveCartCount(state.cartCount);
      saveTotalPrice(state.totalPrice);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
      saveCart(state.cart);
      saveCartCount(state.cartCount);
      saveTotalPrice(state.totalPrice);
      showNotification("info", "Mehsul sebetden silindi !");
    },
    clearCart: (state) => {
      state.cart = [];
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
      saveCart(state.cart);
      saveCartCount(state.cartCount);
      saveTotalPrice(state.totalPrice);
    },
  },
});

export const { addToCart, removeFromCart, setProductCount, clearCart } =
  productSlice.actions;

export default productSlice.reducer;
