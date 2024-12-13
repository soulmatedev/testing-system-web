import { combineReducers } from '@reduxjs/toolkit';
import { testDetailsReducer } from '../entities/question-form/model/slices/testDetailsSlice';
import { multipleChooseReducer } from '../entities/question-form/model/slices/multipleChooseSlice';
import { singleChooseReducer } from '../entities/question-form/model/slices/singleChooseSlice';
import { relationChooseReducer } from '../entities/question-form/model/slices/relationChooseSlice';
import { questionsReducer } from '../entities/question-form/model/slices/questionsSlice';

export const reducers = combineReducers({
	testDetails: testDetailsReducer,
	singleChoose: singleChooseReducer,
	multipleChoose: multipleChooseReducer,
	relationChoose: relationChooseReducer,
	questionsSlice: questionsReducer,
});

export type RootState = ReturnType<typeof reducers>;
