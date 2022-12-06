import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	totalQuantity: 0,
	totalAmount: 0,
	changed: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const itemInCart = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}
		},
		incrementQuantity: (state, action) => {
			const item = state.items.find((item) => item.id === action.payload);
			item.quantity++;
		},
		decrementQuantity: (state, action) => {
			const item = state.items.find((item) => item.id === action.payload);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		removeItem: (state, action) => {
			const removeItem = state.cart.filter(
				(item) => item.id !== action.payload
			);
			state.cart = removeItem;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
