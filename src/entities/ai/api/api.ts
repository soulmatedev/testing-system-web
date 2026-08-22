import { createApi } from '@reduxjs/toolkit/query/react';
import { URI_AI_GENERATE_QUESTIONS } from './consts';
import { IGenerateQuestionsRequest, IGenerateQuestionsResponse } from './types';
import { baseQuery } from '../../../shared/api/api';

export const aiAPI = createApi({
	reducerPath: 'aiAPI',
	baseQuery,
	endpoints: builder => ({
		generateQuestions: builder.mutation<IGenerateQuestionsResponse, IGenerateQuestionsRequest>({
			query: (data) => ({
				url: URI_AI_GENERATE_QUESTIONS,
				method: 'POST',
				body: data,
			}),
		}),
	}),
});
