import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout } from './auth-actions';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
	? localStorage.getItem('userToken')
	: null;

const initialState = {
	loading: false,
	userInfo: null,
	userToken,
	error: null,
	success: false,
};

const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem('userToken'); // delete token from storage
			state.loading = false;
			state.userInfo = null;
			state.userToken = null;
			state.error = null;
		},
		setCredentials: (state, { payload }) => {
			state.userInfo = payload;
		},
	},
	extraReducers: {
		// login user
		[login.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[login.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.userInfo = payload;
			state.userToken = payload.userToken;
		},
		[login.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		// register user
		[register.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[register.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = true; // registration successful
		},
		[register.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		// logout
		[logout.fulfilled]: (state) => {
			state.user = null;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
