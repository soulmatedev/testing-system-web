import { createApi } from '@reduxjs/toolkit/query/react';
import {
	URI_CREATE_TEST,
} from './consts';
import {
	ICreateTestRequest,
} from './types';
import { baseQuery } from '../../../shared/api/api';

export const testAPI = createApi({
	reducerPath: 'testAPI',
	baseQuery,
	refetchOnReconnect: true,
	endpoints: builder => ({
		createTest: builder.mutation<void, ICreateTestRequest>({
			query: (data) => ({
				url: URI_CREATE_TEST,
				method: 'POST',
				body: { ...data },
			}),
		}),
	}),
});
