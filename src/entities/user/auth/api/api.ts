import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../../shared/api/api';
import {
	URI_SIGN_IN,
} from './consts';
import {
	IAccountResponse,
	ISignInRequest,
} from './types';

export const authAPI = createApi({
	reducerPath: 'authAPI',
	baseQuery,
	refetchOnReconnect: true,
	endpoints: builder => ({
		signIn: builder.mutation<IAccountResponse, ISignInRequest>({
			query: (data) => ({
				url: URI_SIGN_IN,
				method: 'POST',
				body: { ...data },
			}),
		}),
	}),
});
