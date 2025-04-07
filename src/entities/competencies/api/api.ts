import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../shared/api/api';
import {
	IBindCompetencyToAnswer,
	ICompetencyResponse,
	ICreateCompetencyRequest,
	ICreateCompetencyResponse,
	IUpdateCompetencyRequest, IUpdateCompetencyResponse,
} from './types';
import {
	URI_BIND_COMPETENCY_TO_ANSWER,
	URI_CREATE_COMPETENCY,
	URI_DELETE_COMPETENCY,
	URI_GET_COMPETENCIES,
	URI_GET_COMPETENCIES_BY_ANSWER,
	URI_UPDATE_COMPETENCY,
} from './consts';

export const competencyAPI = createApi({
	reducerPath: 'competencyAPI',
	baseQuery,
	refetchOnReconnect: true,
	tagTypes: ['competency'],
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
			providesTags: ['competency'],
		}),
		delete: builder.mutation<void, { id: number }>({
			query: ({ id }) => ({
				url: `${URI_DELETE_COMPETENCY}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['competency'],
		}),
		update: builder.mutation<IUpdateCompetencyResponse, IUpdateCompetencyRequest>({
			query: ({
				id, name, description,
			}) => ({
				url: `${URI_UPDATE_COMPETENCY}/${id}`,
				method: 'PUT',
				body: { name, description },
			}),
			invalidatesTags: ['competency'],
		}),
		getCompetenciesByAnswer: builder.query<ICompetencyResponse, { id: number }>({
			query: ({
				id,
			}) => ({
				url: `${URI_GET_COMPETENCIES_BY_ANSWER}/${id}`,
				method: 'GET',
			}),
			providesTags: ['competency'],
		}),
		bindCompetencyToAnswer: builder.mutation<void, IBindCompetencyToAnswer>({
			query: ({
				competencyID,
				answerId,
			}) => ({
				url: URI_BIND_COMPETENCY_TO_ANSWER(competencyID, answerId),
				method: 'POST',
			}),
			invalidatesTags: ['competency'],
		}),
		unbindCompetencyFromAnswer: builder.mutation<void, IBindCompetencyToAnswer>({
			query: ({
				competencyID,
				answerId,
			}) => ({
				url: URI_BIND_COMPETENCY_TO_ANSWER(competencyID, answerId),
				method: 'DELETE',
			}),
			invalidatesTags: ['competency'],
		}),
	}),
});
