import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../entities/user/auth/model/slices/authSlice';
import { testDetailsReducer } from '../entities/question-form/model/slices/testDetailsSlice';
import { multipleChooseReducer } from '../entities/question-form/model/slices/multipleChooseSlice';
import { singleChooseReducer } from '../entities/question-form/model/slices/singleChooseSlice';
import { relationChooseReducer } from '../entities/question-form/model/slices/relationChooseSlice';
import { authAPI } from '../entities/user/auth/api/api';
import { testAPI } from '../entities/tests/api/api';
import { testReducer } from '../entities/tests/model/slices/testSlice';
import { questionsAPI } from '../entities/questions/api/api';
import { questionsReducer } from '../entities/questions/model/slices/questionsSlice';

export const reducers = combineReducers({
	auth: authReducer,
	[authAPI.reducerPath]: authAPI.reducer,

	test: testReducer,
	[testAPI.reducerPath]: testAPI.reducer,

	questionsSlice: questionsReducer,
	[questionsAPI.reducerPath]: questionsAPI.reducer,

	testDetails: testDetailsReducer,
	singleChoose: singleChooseReducer,
	multipleChoose: multipleChooseReducer,
	relationChoose: relationChooseReducer,
	// questionsSlice: questionsReducer,
});

export type RootState = ReturnType<typeof reducers>;
