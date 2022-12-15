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
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.totalAmount = action.payload.totalAmount;
			state.items = action.payload.items;
		},
		addToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find(
				(item) => item.id === newItem.id
			);
			state.totalQuantity += newItem.quantity;
			state.changed = true;

			if (!existingItem) {
				state.items.push({
					...newItem,
					totalPrice: newItem.quantity * newItem.discount,
				});
			} else {
				existingItem.quantity += newItem.quantity;
				existingItem.totalPrice =
					Number(existingItem.quantity) + Number(newItem.discount);
			}
			state.totalAmount = state.items.reduce(
				(total, item) => total + item.totalPrice,
				0
			);
		},

		incrementQuantity: (state, action) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			existingItem.quantity++;
			state.totalQuantity++;
			state.changed = true;
			existingItem.totalPrice =
				Number(existingItem.totalPrice) + Number(existingItem.discount);
			state.totalAmount = state.items.reduce(
				(total, item) => total + item.totalPrice,
				0
			);
		},
		decrementQuantity: (state, action) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			state.totalQuantity--;
			state.changed = true;

			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice =
					Number(existingItem.totalPrice) - Number(existingItem.discount);
				state.totalAmount = state.items.reduce(
					(total, item) => total + item.totalPrice,
					0
				);
			}
		},
		removeItem: (state, action) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);

			if (existingItem) {
				state.items = state.items.filter((item) => item.id !== id);
				state.totalQuantity = state.totalQuantity - existingItem.quantity;
			}

			state.totalAmount = state.items.reduce(
				(total, item) => total + Number(item.discount) * Number(item.quantity),
				0
			);
		}
		
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
