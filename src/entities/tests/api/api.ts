import { createApi } from '@reduxjs/toolkit/query/react';
import {
	URI_CREATE_TEST, URI_TEST,
} from './consts';
import {
	ICompleteTestRequest,
	ICreateTestRequest, ICreateTestResponse, ITest, ITestResult, IUpdateTestRequest,
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
			invalidatesTags: ['test'],
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
				url: `${URI_TEST}/completed`,
				method: 'GET',
				params: { userId },
			}),
			providesTags: ['test'],
		}),
		getAllCompletedTests: builder.query<ITest[], void>({
			query: () => ({
				url: `${URI_TEST}/all/completed`,
				method: 'GET',
			}),
			providesTags: ['test'],
		}),
		getAllTests: builder.query<ITest[], void>({
			query: () => ({
				url: `${URI_TEST}/all`,
				method: 'GET',
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
		completeTest: builder.mutation<void, { testId: number } & ICompleteTestRequest>({
			query: ({ testId, ...body }) => ({
				url: `${URI_TEST}/${testId}/complete`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['test'],
		}),
		getTestResult: builder.query<ITestResult, { testId: number | null; userId: number }>({
			query: ({ testId, userId }) => ({
				url: `${URI_TEST}/${testId}/result`,
				method: 'GET',
				params: { userId },
			}),
			providesTags: ['test'],
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
