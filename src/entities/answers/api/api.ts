import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
import {
	IAnswer,
	IAnswerRequest, IAnswerResponse,
	IBindAnswerToQuestion,
} from './types';
import { URI_ANSWER, URI_BIND_ANSWER_TO_QUESTION } from './consts';

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
		getAnswersByQuestionId: builder.query<IAnswer[], number>({
			query: (questionId) => ({
				url: `${URI_ANSWER}/by-question/${questionId}`,
				method: 'GET',
			}),
			providesTags: ['answer'],
		}),
		bind: builder.mutation<void, IBindAnswerToQuestion>({
			query: ({ questionId, answerId }) => ({
				url: URI_BIND_ANSWER_TO_QUESTION(questionId, answerId),
				method: 'POST',
				body: {
					questionId,
					answerId,
				},
			}),
			invalidatesTags: ['answer'],
		}),
		unbind: builder.mutation<void, IBindAnswerToQuestion>({
			query: ({
				questionId,
				answerId,
			}) => ({
				url: URI_BIND_ANSWER_TO_QUESTION(questionId, answerId),
				method: 'DELETE',
			}),
			invalidatesTags: ['answer'],
		}),
	}),
});
