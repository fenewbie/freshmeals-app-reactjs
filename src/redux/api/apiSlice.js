import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery(),
	tagTypes: ['Products'],
	endpoints: (builder) => ({
		fetchProducts: builder.query({
			async queryFn() {
				try {
					const productsRef = collection(db, 'products');
					const querySnapshot = await getDocs(productsRef);
					let productList = [];
					querySnapshot?.forEach((product) => {
						productList.push({
							id: product.id,
							...product.data(),
						});
						return { data: productList };
					});
				} catch (err) {
					return { error: err };
				}
			},
			providesTags: ['Products'],
		}),
		fetchProduct: builder.query({
			async queryFn(id) {
				try {
					const productRef = doc(db, 'products', id);
					const snapshot = await getDoc(productRef);
					return { data: snapshot.data() };
				} catch (err) {
					return { error: err };
				}
			},
			providesTag: ['Products'],
		}),
	}),
});

export const { useFetchProductsQuery, useFetchProductQuery } = productsApi;
