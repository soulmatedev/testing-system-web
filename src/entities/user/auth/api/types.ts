export interface ISignInRequest {
	email: string;
	password: string;
}

export interface IAccountResponse {
	access_token: string;
	refresh_token: string;
}
