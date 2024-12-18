import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
	email: string;
	password: string;
}

const initialState: IAuthState = {
	email: '',
	password: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setEmail(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},
		setPassword(state, action: PayloadAction<string>) {
			state.password = action.payload;
		},
		clearData(state) {
			state.email = '';
			state.password = '';
		},
	},
});

export const {
	actions: authActions,
	reducer: authReducer,
} = authSlice;
