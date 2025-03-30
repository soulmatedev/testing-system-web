import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { testAPI } from '../entities/tests/api/api';
import { questionAPI } from '../entities/questions/api/api';
import { competencyAPI } from '../entities/competencies/api/api';
import { answerAPI } from '../entities/answers/api/api';
import { authAPI } from '../entities/user/auth/api/api';

const setupStore = () => configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}).concat(
		authAPI.middleware,
		testAPI.middleware,
		questionAPI.middleware,
		competencyAPI.middleware,
		answerAPI.middleware,
	),
});

const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default store;
