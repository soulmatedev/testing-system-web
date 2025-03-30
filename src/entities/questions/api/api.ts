import { createApi } from '@reduxjs/toolkit/query/react';
import {
	URI_QUESTION, URI_QUESTION_CREATE,
} from './consts';
import {
	ICreateQuestionRequest, IQuestion,
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
		update: builder.mutation<void, IQuestion>({
			query: ({ id, ...data }) => ({
				url: `${URI_QUESTION}/${id}`,
				method: 'PUT',
				body: { ...data },
			}),
			invalidatesTags: ['questionAPI'],
		}),
	}),
});
