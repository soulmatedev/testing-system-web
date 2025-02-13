import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { authAPI } from '../entities/user/auth/api/api';
import { testAPI } from '../entities/tests/api/api';
import { questionsAPI } from '../entities/questions/api/api';
import { competencyAPI } from '../entities/competencies/api/api';
import { answersAPI } from '../entities/answers/api/api';

const setupStore = () => configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}).concat(
		authAPI.middleware,
		testAPI.middleware,
		questionsAPI.middleware,
		competencyAPI.middleware,
		answersAPI.middleware,
	),
});

const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default store;
