import { createSlice } from "@reduxjs/toolkit";

interface ICartProduct {
  products: {
    id: number;
    name: string;
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
      const { id, name, price } = action.payload;
      const existingProduct = state.products.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({
          id,
          name,
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
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const selectTotalPrice = (state: { cart: ICartProduct }) => state.cart.totalPrice;
export default cartSlice.reducer;
