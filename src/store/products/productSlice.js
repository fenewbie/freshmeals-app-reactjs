import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';

export const getProducts = createAsyncThunk(
	'productDisplay/getProducts',
	async () => {
		try {
			const productsSnap = await getDocs(collection(db, 'products'));
			let document = [];
			productsSnap.forEach((doc) => {
				document.push({ ...doc.data(), id: doc.id });
			});
			return document;
		} catch (err) {
			console.log('Error getting products failed:', err.message);
		}
	}
);

export const getProductById = createAsyncThunk(
	'productDisplay/getProductDetail',
	async (id) => {
		try {
			const productRef = doc(db, 'products', id);
			const productSnap = await getDoc(productRef);
			const obj = productSnap.data();
			obj.id = productSnap.id
			return obj;
		} catch (err) {
			console.log('Error getting product failed:', err.message);
		}
	}
);

const initialState = {
	products: [],
	isLoading: false,
	filterProduct: [],
	selectedProduct: {},
};

const productSlice = createSlice({
	name: 'productDisplay',
	initialState: initialState,
	reducers: {
		filterProductCategory: (state, action) => {
			switch (action.payload) {
				case 'food & drink':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'food' || 'drink'
					);
					break;
				case 'vegetables':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'vegetables'
					);
					break;
				case 'dried food':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'dried food'
					);
					break;
				case 'bread & cake':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'bread' || 'cake'
					);
					break;
				case 'fish & meat':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'fish' || 'meat'
					);
					break;
				case 'fruits':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'fruits'
					);
					break;
				default:
					return state;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
				state.filterProduct = action.payload;
			})
			.addCase(getProducts.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(getProductById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.selectedProduct = action.payload;
			})
			.addCase(getProductById.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
