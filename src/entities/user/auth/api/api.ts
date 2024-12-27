import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../../../shared/api/api';
import {
	URI_SIGN_IN, URI_SIGN_UP,
} from './consts';
import {
	ISignInRequest, ISignInResponse, ISignUpRequest,
} from './types';

export const authAPI = createApi({
	reducerPath: 'authAPI',
	baseQuery,
	refetchOnReconnect: true,
	endpoints: builder => ({
		signIn: builder.mutation<ISignInResponse, ISignInRequest>({
			query: (data) => ({
				url: URI_SIGN_IN,
				method: 'POST',
				body: { ...data },
			}),
		}),
		signUp: builder.mutation<void, ISignUpRequest>({
			query: (data) => ({
				url: URI_SIGN_UP,
				method: 'POST',
				body: { ...data },
			}),
		}),
	}),
});
