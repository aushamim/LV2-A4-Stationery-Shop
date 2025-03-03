import { createSlice } from "@reduxjs/toolkit";

interface ICartProduct {
  products: {
    id: string;
    name: string;
    imgUrl: string;
    price: number;
    quantity: number;
  }[];
  totalPrice: number;
}

const initialState: ICartProduct = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, name, price, imgUrl } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({
          id,
          name,
          imgUrl,
          price,
          quantity: 1,
        });
      }

      state.totalPrice += price;
    },

    removeProduct: (state, action) => {
      const { id, price } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.products = state.products.filter((product) => product.id !== id);
        } else {
          existingProduct.quantity -= 1;
        }

        state.totalPrice -= price;
      }
    },

    removeFromCart: (state, action) => {
      const { id, price } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);

      if (existingProduct) {
        state.products = state.products.filter((product) => product.id !== id);

        state.totalPrice -= price * existingProduct?.quantity;
      }
    },

    clearCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, removeFromCart, clearCart } = cartSlice.actions;
export const selectTotalPrice = (state: { cart: ICartProduct }) => parseFloat(state.cart.totalPrice.toFixed(2));
export const selectCartData = (state: { cart: ICartProduct }) => state.cart;
export default cartSlice.reducer;
