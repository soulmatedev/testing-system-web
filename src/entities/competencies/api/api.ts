import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
import { ICompetency, ICompetencyRequest } from './types';
import { URI_CREATE_COMPETENCY, URI_GET_COMPETENCIES } from './consts';

export const competenciesAPI = createApi({
	reducerPath: 'competenciesAPI',
	baseQuery,
	refetchOnReconnect: true,
	tagTypes: ['competencies'],
	endpoints: builder => ({
		createCompetency: builder.mutation<void, ICompetencyRequest>({
			query: (data) => ({
				url: URI_CREATE_COMPETENCY,
				method: 'POST',
				body: { ...data },
			}),
		}),
		getCompetencies: builder.query<ICompetency, void>({
			query: () => ({
				url: URI_GET_COMPETENCIES,
				method: 'GET',
			}),
			providesTags: ['competencies'],
		}),
	}),
});
