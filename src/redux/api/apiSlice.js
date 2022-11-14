import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as cs from '../../constants/Constant';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${cs.BASE_URL}`,
	}),
	endpoints: (builder) => ({
		getProductsByCategory: builder.query({
			query: (product) => `/search?apiKey=${cs.API_KEY}&query=${product}`,
		}),
	}),
});

export const { useGetProductsByCategory } = productsApi;
