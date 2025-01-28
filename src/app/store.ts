import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { authAPI } from '../entities/user/auth/api/api';
import { testAPI } from '../entities/tests/api/api';
import { questionsAPI } from '../entities/questions/api/api';
import { competenciesAPI } from '../entities/competencies/api/api';

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}).concat(
		authAPI.middleware,
		testAPI.middleware,
		questionsAPI.middleware,
		competenciesAPI.middleware,
	),
});

export default store;
export type AppDispatch = typeof store.dispatch;
