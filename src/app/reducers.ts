import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../entities/user/auth/model/slices/authSlice';
import { testDetailsReducer } from '../entities/question-form/model/slices/testDetailsSlice';
import { multipleChooseReducer } from '../entities/question-form/model/slices/multipleChooseSlice';
import { singleChooseReducer } from '../entities/question-form/model/slices/singleChooseSlice';
import { relationChooseReducer } from '../entities/question-form/model/slices/relationChooseSlice';
import { questionsReducer } from '../entities/question-form/model/slices/questionsSlice';
import { authAPI } from '../entities/user/auth/api/api';

export const reducers = combineReducers({
	auth: authReducer,
	[authAPI.reducerPath]: authAPI.reducer,

	testDetails: testDetailsReducer,
	singleChoose: singleChooseReducer,
	multipleChoose: multipleChooseReducer,
	relationChoose: relationChooseReducer,
	questionsSlice: questionsReducer,
});

export type RootState = ReturnType<typeof reducers>;
