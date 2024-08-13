import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item._id === action.payload._id);
      if (itemIndex >= 0) {
        // Si el ítem ya está en el carrito, aumentar la cantidad
        state.items[itemIndex].quantity = (state.items[itemIndex].quantity || 0) + 1;
      } else {
        // Si el ítem no está en el carrito, agregarlo con cantidad 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item._id === action.payload._id);
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          // Si la cantidad es mayor a 1, disminuir la cantidad
          state.items[itemIndex].quantity -= 1;
        } else {
          // Si la cantidad es 1, eliminar el ítem
          state.items.splice(itemIndex, 1);
        }
      } else {
        console.log("Can't remove an item that is not in the cart!");
      }
    },

    emptyCart: (state) => {
        state.items = [];
    },
  },
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export const selectCartItemsById = (state, id) => state.cart.items.find(item => item._id === id);

export const selectCartTotal = state => state.cart.items.reduce((total, item) => total + (item.price * item.quantity || 0), 0);

export default cartSlice.reducer;
