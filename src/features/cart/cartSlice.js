import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: "Medi",
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = itemObject
      state.cart.push(action.payload);
      console.log(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if(item.quantity===0) cartSlice.caseReducers.deleteItem(state,action)
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => {
      return sum + item.totalPrice;
}, 0);
export const getCart = (state)=> state.cart.cart;

export const getCurrentQuantity = (id)=>(state)=> state.cart.cart.find((item)=> item.pizzaId==id)?.quantity??0;

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
