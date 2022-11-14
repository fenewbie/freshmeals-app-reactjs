import { configureStore } from '@reduxjs/toolkit';

import productSlice from './products/productSlice';

export const store = configureStore({
	reducer: { products: productSlice.reducer },
});
