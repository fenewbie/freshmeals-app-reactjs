import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: { [productsApi.reducerPath]: productsApi.reducer },
	
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
