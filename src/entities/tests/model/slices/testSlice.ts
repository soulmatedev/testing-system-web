import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreateTestRequest } from '../../api/types';

interface ITestState {
	name: string;
	description: string;
	questions: any[];
	tests: ICreateTestRequest[];
}

const initialState: ITestState = {
	name: '',
	description: '',
	questions: [],
	tests: [],
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
		setQuestions(state, action: PayloadAction<any[]>) {
			state.questions = action.payload;
		},
		addQuestion(state, action: PayloadAction<any>) {
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
