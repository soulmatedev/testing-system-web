import { createApi } from '@reduxjs/toolkit/query/react';
import {
	URI_QUESTION, URI_QUESTION_CREATE, URI_QUESTION_GET_ALL,
} from './consts';
import {
	ICreateQuestionRequest, IGetQuestionsRequest, IGetQuestionsResponse, IQuestion,
} from './types';
import { baseQuery } from '../../../shared/api/api';

export const questionAPI = createApi({
	reducerPath: 'questionAPI',
	baseQuery,
	refetchOnReconnect: true,
	tagTypes: ['questionAPI'],
	endpoints: builder => ({
		create: builder.mutation<IQuestion, ICreateQuestionRequest>({
			query: (data) => ({
				url: URI_QUESTION_CREATE,
				method: 'POST',
				body: data,
			}),
		}),
		getAll: builder.query<IGetQuestionsResponse, IGetQuestionsRequest>({
			query: (data) => ({
				url: URI_QUESTION_GET_ALL,
				method: 'GET',
				params: data,
			}),
			providesTags: ['questionAPI'],
		}),
		update: builder.mutation<void, IQuestion>({
			query: ({ id, ...data }) => ({
				url: `${URI_QUESTION}/${id}`,
				method: 'PUT',
				body: { ...data },
			}),
			invalidatesTags: ['questionAPI'],
		}),
		delete: builder.mutation<void, { id: number }>({
			query: ({ id }) => ({
				url: `${URI_QUESTION}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['questionAPI'],
		}),
	}),
});
