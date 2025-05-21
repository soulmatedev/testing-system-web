import { createApi } from '@reduxjs/toolkit/query/react';
import {
	URI_CREATE_TEST, URI_RESULTS_TEST, URI_TEST,
} from './consts';
import {
	ICreateTestRequest, ICreateTestResponse, ITest, IUpdateTestRequest,
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
		getTestsByUser: builder.query<ITest[], void>({
			query: () => ({
				url: `${URI_TEST}/tests`,
				method: 'GET',
			}),
			providesTags: ['test'],
		}),
		getCompletedTestsByUser: builder.query<ITest[], number>({
			query: (userId) => ({
				url: `${URI_RESULTS_TEST}/results`,
				method: 'GET',
				params: { userId },
			}),
			providesTags: ['test'],
		}),
		getTestByUser: builder.query<ITest, number>({
			query: (userId) => ({
				url: `${URI_TEST}/${userId}`,
				method: 'GET',
			}),
			providesTags: ['test'],
		}),
		completeTest: builder.mutation<void, { userId: number; testId: number }>({
			query: ({ testId, userId }) => ({
				url: `${URI_RESULTS_TEST}/${testId}/complete?userId=${userId}`,
				method: 'PATCH',
			}),
			invalidatesTags: ['test'],
		}),
		delete: builder.mutation<void, { id: number }>({
			query: ({ id }) => ({
				url: `${URI_TEST}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['test'],
		}),
	}),
});
