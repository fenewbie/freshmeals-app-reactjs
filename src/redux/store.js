import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import uiReducer from './ui/ui-slice'
export const store = configureStore({
	reducer: {
		ui: uiReducer,
		cart: cartSlice.reducer,
	},
});

