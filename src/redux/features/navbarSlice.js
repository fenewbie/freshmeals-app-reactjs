import apiAxios from '../../services/apiAxios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getNavbarList = createAsyncThunk('navbar/getNavbarList', async (_, thunkApi) => {
  try {
    const resp = apiAxios.get(`/navbar`);
    return resp;
  } catch (error) {
    console.log(`Get navbar list error: ${error}`);
  }
});

const initialState = {
  list: [],
  currentPage: 'Home',
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {},
  extraReducers: {
    [getNavbarList.pending]: state => {},
    [getNavbarList.fulfilled]: (state, { payload }) => {
      // console.log(`Navbar payload: `);
      // console.log(payload);
      state.list = payload;
    },
    [getNavbarList.rejected]: state => {},
  },
});

export default navbarSlice.reducer;
