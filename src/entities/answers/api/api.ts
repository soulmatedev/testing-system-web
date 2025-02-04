import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
import { IAnswerRequest, ICreateAnswer } from './types';
import { URI_ANSWER } from './consts';

export const answersAPI = createApi({
	reducerPath: 'answersAPI',
	baseQuery,
	refetchOnReconnect: true,
	tagTypes: ['answers'],
	endpoints: builder => ({
		createAnswer: builder.mutation<IAnswerRequest, ICreateAnswer>({
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
			invalidatesTags: ['answers'],
		}),
	}),
});
