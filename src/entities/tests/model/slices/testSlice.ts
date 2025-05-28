import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreateTestRequest } from '../../api/types';
import { IQuestion } from '../../../questions/api/types';

interface ITestState {
	name: string;
	description: string;
	questions: IQuestion[];
	tests: ICreateTestRequest[];
	correctAnswersCount: number;
	totalQuestionsCount: number;
}

const initialState: ITestState = {
	name: '',
	description: '',
	questions: [],
	tests: [],
	correctAnswersCount: 0,
	totalQuestionsCount: 0,
};

const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		setTitle(state, action: PayloadAction<string>) {
			state.name = action.payload;
		},
		setDescription(state, action: PayloadAction<string>) {
			state.description = action.payload;
		},
		setQuestions(state, action: PayloadAction<IQuestion[]>) {
			state.questions = action.payload;
		},
		addQuestion(state, action: PayloadAction<IQuestion>) {
			state.questions.push(action.payload);
		},
		addTest(state, action: PayloadAction<ICreateTestRequest>) {
			state.tests.push(action.payload);
		},
		updateTest(state, action: PayloadAction<ICreateTestRequest>) {
			const index = state.tests.findIndex(test => test.name === action.payload.name);
			if (index !== -1) {
				state.tests[index] = action.payload;
			}
		},
		deleteTest(state, action: PayloadAction<string>) {
			state.tests = state.tests.filter(test => test.name !== action.payload);
		},
		setTests(state, action: PayloadAction<ICreateTestRequest[]>) {
			state.tests = action.payload;
		},
		setCorrectAnswersCount(state, action: PayloadAction<number>) {
			state.correctAnswersCount = action.payload;
		},
		setTotalQuestionsCount(state, action: PayloadAction<number>) {
			state.totalQuestionsCount = action.payload;
		},
		resetTest(state) {
			state.name = '';
			state.description = '';
			state.questions = [];
			state.tests = [];
		},
	},
});

export const {
	actions: testActions,
	reducer: testReducer,
} = testSlice;
