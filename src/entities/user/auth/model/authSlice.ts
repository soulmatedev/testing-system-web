import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
	email: string;
	password: string;
	login: string;
}

const initialState: IAuthState = {
	email: '',
	password: '',
	login: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setEmail(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},
		setLogin(state, action: PayloadAction<string>) {
			state.login = action.payload;
		},
		setPassword(state, action: PayloadAction<string>) {
			state.password = action.payload;
		},
		clearData(state) {
			state.email = '';
			state.login = '';
			state.password = '';
		},
	},
});

export const {
	actions: authActions,
	reducer: authReducer,
	selectors: authSelectors,
} = authSlice;
