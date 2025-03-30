import { combineReducers } from '@reduxjs/toolkit';
import { multipleChooseReducer } from '../entities/question-types/multiple/model/slice';
import { singleChooseReducer } from '../entities/question-types/single/model/slice';
import { relationChooseReducer } from '../entities/question-types/relation/model/slice';
import { testAPI } from '../entities/tests/api/api';
import { testReducer } from '../entities/tests/model/slices/testSlice';
import { questionAPI } from '../entities/questions/api/api';
import { questionsReducer } from '../entities/questions/model/slice';
import { competencyAPI } from '../entities/competencies/api/api';
import { answerAPI } from '../entities/answers/api/api';
import { authReducer } from '../entities/user/auth/model/authSlice';
import { authAPI } from '../entities/user/auth/api/api';

export const reducers = combineReducers({
	auth: authReducer,
	[authAPI.reducerPath]: authAPI.reducer,

	test: testReducer,
	[testAPI.reducerPath]: testAPI.reducer,

	questionsSlice: questionsReducer,
	[questionAPI.reducerPath]: questionAPI.reducer,

	[competencyAPI.reducerPath]: competencyAPI.reducer,

	singleChooseSlice: singleChooseReducer,
	[answerAPI.reducerPath]: answerAPI.reducer,

	multipleChooseSlice: multipleChooseReducer,
	relationChooseSlice: relationChooseReducer,
});

export type RootState = ReturnType<typeof reducers>;
