import { createApi } from '@reduxjs/toolkit/query/react';
import {
	URI_CREATE_TEST, URI_TEST,
} from './consts';
import {
	ICreateTestRequest, ICreateTestResponse, IUpdateTestRequest,
} from './types';
import { baseQuery } from '../../../shared/api/api';

export const testAPI = createApi({
	reducerPath: 'testAPI',
	baseQuery,
	refetchOnReconnect: true,
	tagTypes: ['test'],
	endpoints: builder => ({
		createTest: builder.mutation<ICreateTestResponse, ICreateTestRequest>({
			query: (data) => ({
				url: URI_CREATE_TEST,
				method: 'POST',
				body: { ...data },
			}),
		}),
		update: builder.mutation<void, IUpdateTestRequest>({
			query: ({ id, ...data }) => ({
				url: `${URI_TEST}/${id}`,
				method: 'PUT',
				body: { ...data },
			}),
			invalidatesTags: ['test'],
		}),
	}),
});
