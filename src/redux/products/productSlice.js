import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiAxios from '../../services/apiAxios';

export const getProducts = createAsyncThunk(
	'productDisplay/getProducts',
	async () => {
		try {
			const res = await apiAxios.get('/search?query=vegetables');
			// const res = await apiAxios.get(`/search?query=${productName}`);
			console.log(res);
		} catch (err) {
			console.log('Error getting products failed: ' + err.message);
		}
	}
);

export const getProductDetail = createAsyncThunk(
	'productDisplay/getProductDetail',
	async (id) => {
		try {
			const res = await apiAxios.get(`/products/${id}`);
			// console.log(res);
			return res;
		} catch (err) {
			console.log('Error getting each product failed:', err.message);
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
				case 'FOOD & DRINKS':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'Food_Drink'
					);
					break;
				case 'VEGETABLES':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'Vegetables'
					);
					break;
				case 'DRIED FOODS':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'DriedFood'
					);
					break;
				case 'BREAD & CAKE':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'Bread_Cake'
					);
					break;
				case 'FISH & MEAT':
					state.filterProduct = state.products.filter(
						(item) => item.category === 'Fish_Meat'
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
			.addCase(getProductDetail.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProductDetail.fulfilled, (state, action) => {
				state.isLoading = false;
				state.selectedProduct = action.payload;
			})
			.addCase(getProductDetail.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const productActions = productSlice.actions;
export default productSlice;
