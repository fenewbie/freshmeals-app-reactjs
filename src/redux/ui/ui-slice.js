import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: { isDisplay: false },
	reducers: {
		toggleNavMobi(state) {
			state.isDisplay = !state.isDisplay;
		}
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
