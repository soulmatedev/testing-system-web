import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITest {
	id: number,
	title: string;
	description: string;
	questions: any[];
}

interface ITestDetailsState {
	title: string;
	description: string;
	tests: ITest[];
}

const initialState: ITestDetailsState = {
	title: '',
	description: '',
	tests: [],
};

export const testDetailsSlice = createSlice({
	name: 'testDetails',
	initialState,
	selectors: {
		getTests: (state: ITestDetailsState) => state.tests,
	},
	reducers: {
		setTitle(state, action: PayloadAction<string>) {
			state.title = action.payload;
		},
		setDescription(state, action: PayloadAction<string>) {
			state.description = action.payload;
		},
		addTest(state, action: PayloadAction<ITest>) {
			state.tests.push(action.payload);
		},
		resetTestDetails(state) {
			state.title = '';
			state.description = '';
		},
		clearTests(state) {
			state.tests = [];
		},
	},
});

export const {
	actions: testDetailsActions,
	reducer: testDetailsReducer,
	selectors: testDetailsSelectors,
} = testDetailsSlice;
