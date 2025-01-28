import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../entities/user/auth/model/authSlice';
import { multipleChooseReducer } from '../entities/question-types/multiple/model/multipleChooseSlice';
import { singleChooseReducer } from '../entities/question-types/single/model/singleChooseSlice';
import { relationChooseReducer } from '../entities/question-types/relation/model/relationChooseSlice';
import { authAPI } from '../entities/user/auth/api/api';
import { testAPI } from '../entities/tests/api/api';
import { testReducer } from '../entities/tests/model/slices/testSlice';
import { questionsAPI } from '../entities/questions/api/api';
import { questionsReducer } from '../entities/questions/model/slices/questionsSlice';
import { competenciesAPI } from '../entities/competencies/api/api';

let testDetailsReducer; // TODO убрать
export const reducers = combineReducers({
	auth: authReducer,
	[authAPI.reducerPath]: authAPI.reducer,

	test: testReducer,
	[testAPI.reducerPath]: testAPI.reducer,

	questionsSlice: questionsReducer,
	[questionsAPI.reducerPath]: questionsAPI.reducer,

	[competenciesAPI.reducerPath]: competenciesAPI.reducer,

	testDetails: testDetailsReducer,
	singleChoose: singleChooseReducer,
	multipleChoose: multipleChooseReducer,
	relationChoose: relationChooseReducer,
	// questionsSlice: questionsReducer,
});

export type RootState = ReturnType<typeof reducers>;
