import {
	BaseQueryFn,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { v4 as uuid } from 'uuid';
import { BASE_API_URL, SERVER_ENVIRONMENT_DEV } from '../../api/API';

// const BASE_API_URL_DEV = 'https://a.service-to.ru/api/';
const BASE_API_URL_DEV = 'http://localhost:25504/api/';

export const providesList = <R extends { id: string | number }[], T extends string>(
	resultsWithIds: R | undefined,
	tagType: T,
) => (resultsWithIds
		? [...resultsWithIds.map(({ id }) => ({
			type: tagType,
			id,
		}))]
		: [tagType]);

const setBaseUrl = () => {
	const serverEnvironment = process.env.REACT_APP_ENVIRONMENT_SERVER;

	switch (serverEnvironment) {
	case SERVER_ENVIRONMENT_DEV:
		return BASE_API_URL_DEV;
	default:
		throw new Error(`Неизвестная среда: ${serverEnvironment}`);
	}
};

const paramsSerializer = (params: any) => {
	const searchParams = new URLSearchParams();
	Object.keys(params)
		.forEach((key) => {
			const value = params[key];
			if (Array.isArray(value)) {
				value.forEach((item) => {
					searchParams.append(key, item);
				});
			} else if (value) {
				searchParams.append(key, value);
			}
		});
	return searchParams.toString();
};

const rawBaseQuery = fetchBaseQuery({
	baseUrl: setBaseUrl(),
	paramsSerializer,
	credentials: 'include',
	prepareHeaders: (headers) => {
		const authorization = localStorage.getItem('token')
			? localStorage.getItem('token')
			: sessionStorage.getItem('token');

		const token = `Bearer ${authorization}`;

		headers.set('Client-Request-Id', uuid());
		headers.set('Authorization', token || '');

		return headers;
	},
});

export const baseQuery: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	const result = await rawBaseQuery(args, api, extraOptions);

	if (result.error && result.error.status === 401) {
		localStorage.removeItem('token');
		sessionStorage.removeItem('token');
		window.location.href = BASE_API_URL;
	}

	return result;
};
