import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import productSlice from './products/productSlice';
import uiReducer from './ui/ui-slice'
export const store = configureStore({
	reducer: {
		ui: uiReducer,
		cart: cartSlice.reducer,
		products: productSlice.reducer
	},
});

