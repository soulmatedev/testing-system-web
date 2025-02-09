import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
import { ICompetencyResponse, ICreateCompetencyRequest, ICreateCompetencyResponse } from './types';
import { URI_CREATE_COMPETENCY, URI_DELETE_COMPETENCY, URI_GET_COMPETENCIES } from './consts';

export const competenciesAPI = createApi({
	reducerPath: 'competenciesAPI',
	baseQuery,
	refetchOnReconnect: true,
	tagTypes: ['competencies'],
	endpoints: builder => ({
		createCompetency: builder.mutation<ICreateCompetencyResponse, ICreateCompetencyRequest>({
			query: (data) => ({
				url: URI_CREATE_COMPETENCY,
				method: 'POST',
				body: { ...data },
			}),
		}),
		getCompetencies: builder.query<ICompetencyResponse, void>({
			query: () => ({
				url: URI_GET_COMPETENCIES,
				method: 'GET',
			}),
			providesTags: ['competencies'],
		}),
		delete: builder.mutation<void, { id: number }>({
			query: ({ id }) => ({
				url: `${URI_DELETE_COMPETENCY}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['competencies'],
		}),
	}),
});
