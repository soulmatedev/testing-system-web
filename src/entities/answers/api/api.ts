import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
import { IAnswerRequest, IAnswerResponse } from './types';
import { URI_ANSWER } from './consts';

export const answerAPI = createApi({
	reducerPath: 'answerAPI',
	baseQuery,
	refetchOnReconnect: true,
	tagTypes: ['answer'],
	endpoints: builder => ({
		createAnswer: builder.mutation<IAnswerResponse, IAnswerRequest>({
			query: (data) => ({
				url: `${URI_ANSWER}/create`,
				method: 'POST',
				body: { ...data },
			}),
		}),
		delete: builder.mutation<void, { id: number }>({
			query: ({ id }) => ({
				url: `${URI_ANSWER}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['answer'],
		}),
	}),
});
