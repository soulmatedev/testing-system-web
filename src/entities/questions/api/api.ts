import { createApi } from '@reduxjs/toolkit/query/react';
import {
	URI_QUESTIONS,
} from './consts';
import {
	ICreateQuestionRequest,
} from './types';
import { baseQuery } from '../../../shared/api/api';

export const questionsAPI = createApi({
	reducerPath: 'questionsAPI',
	baseQuery,
	refetchOnReconnect: true,
	endpoints: builder => ({
		createQuestion: builder.mutation<void, ICreateQuestionRequest>({
			query: (data) => ({
				url: URI_QUESTIONS,
				method: 'POST',
				body: { ...data },
			}),
		}),
	}),
});
