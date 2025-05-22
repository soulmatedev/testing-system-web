export const SERVER_ENVIRONMENT_DEV = 'dev';

// const BASE_API_URL_DEV = 'http://localhost:25504/api/';
export const BASE_API_URL_DEV = 'https://a.service-to.ru/api/';
export const BASE_API_URL = 'https://a.service-to.ru/';

/* Слой доступа к данным */
class DAL {
	apiUrl: string;

	constructor() {
		this.apiUrl = BASE_API_URL_DEV;
	}
}

const API = new DAL();

export default API;
