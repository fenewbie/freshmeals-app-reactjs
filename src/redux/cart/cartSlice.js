import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items : [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
	changed: false
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity++;
			state.changed = true;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			state.totalQuantity--;
			state.changed = true;
			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
		},

        deleteItemFromCart(state,action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.changed = true;
            if(existingItem) {
                state.items=state.item.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }

            state.totalPrice = state.items.reduce((total,item)=> total + (item.price) * (item.quantity), 0)
        }
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
