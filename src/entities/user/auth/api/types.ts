// Авторизация
export interface ISignInRequest {
	email: string;
	password: string;
}

export interface ISignInResponse {
	access_token: string;
	refresh_token: string;
	login: string;
	name: string;
	role: string;
	id: string;
}

// Регистрация
export interface ISignUpRequest {
	email: string;
	login: string;
	password: string;
}

export interface IAccountResponse {
	id: number;
	email: string;
	password: string;
	login: string | null;
	name: string | null;
	role: number | null;
}
