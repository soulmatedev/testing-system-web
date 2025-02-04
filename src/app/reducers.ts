import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../entities/user/auth/model/authSlice';
import { multipleChooseReducer } from '../entities/question-types/multiple/model/slice';
import { singleChooseReducer } from '../entities/question-types/single/model/slice';
import { relationChooseReducer } from '../entities/question-types/relation/model/slice';
import { authAPI } from '../entities/user/auth/api/api';
import { testAPI } from '../entities/tests/api/api';
import { testReducer } from '../entities/tests/model/slices/testSlice';
import { questionsAPI } from '../entities/questions/api/api';
import { questionsReducer } from '../entities/questions/model/slice';
import { competenciesAPI } from '../entities/competencies/api/api';
import { answersAPI } from '../entities/answers/api/api';

export const reducers = combineReducers({
	auth: authReducer,
	[authAPI.reducerPath]: authAPI.reducer,

	test: testReducer,
	[testAPI.reducerPath]: testAPI.reducer,

	questionsSlice: questionsReducer,
	[questionsAPI.reducerPath]: questionsAPI.reducer,

	[competenciesAPI.reducerPath]: competenciesAPI.reducer,

	// testDetails: testDetailsReducer,
	singleChooseSlice: singleChooseReducer,
	[answersAPI.reducerPath]: answersAPI.reducer,

	multipleChooseSlice: multipleChooseReducer,
	relationChooseSlice: relationChooseReducer,
	// questionsSlice: questionsReducer,
});

export type RootState = ReturnType<typeof reducers>;
