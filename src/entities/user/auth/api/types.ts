// Авторизация
export interface ISignInRequest {
	email: string;
	password: string;
}

export interface ISignInResponse {
	access_token: string;
	refresh_token: string;
}

// Регистрация
export interface ISignUpRequest {
	email: string;
	login: string;
	password: string;
}
