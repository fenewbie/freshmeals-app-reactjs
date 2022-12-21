import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		saveUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
