import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@services/firebase';

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	try {
		const loginUser = await signInWithEmailAndPassword(auth, user);
		console.log('user', loginUser);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});


export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
	try {
		const registerUser = await createUserWithEmailAndPassword(auth, user);
		console.log('user', registerUser);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const logout = createAsyncThunk('auth/logout', async () => {
	await signOut();
});