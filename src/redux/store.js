import { configureStore } from '@reduxjs/toolkit';
import navbar from './features/navbarSlice';

const store = configureStore({
  reducer: {
    navbar,
  },
});

export default store;
