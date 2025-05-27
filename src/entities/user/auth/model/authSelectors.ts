import { RootState } from '../../../../app/reducers';

export const selectEmail = (state: RootState) => state.auth.email;

export const selectLogin = (state: RootState) => state.auth.login;

export const selectPassword = (state: RootState) => state.auth.password;

export const selectIsFormValid = (state: RootState) => state.auth.email.trim() !== ''
	&& state.auth.password.trim() !== ''
	&& state.auth.password.length >= 4;
