import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
// import { IStartTestParams, IStartTestRequestBody, IStartTestResponse } from './types';

export const testPassageAPI = createApi({
	reducerPath: 'testPassageAPI',
	baseQuery,
	tagTypes: ['testPassage'],
	endpoints: (builder) => ({
		// startTest: builder.mutation<IStartTestResponse, IStartTestParams & IStartTestRequestBody>({
		// 	query: ({ testId, userId }) => ({
		// 		url: `${URI_RESULTS_TEST}/${testId}/start`,
		// 		method: 'POST',
		// 		body: { userId },
		// 	}),
		// 	invalidatesTags: ['testPassage'],
		// }),
	}),
});
