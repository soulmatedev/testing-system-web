import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITest {
	id: number,
	title: string;
	description: string;
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
	},
});

export const {
	actions: testDetailsActions,
	reducer: testDetailsReducer,
	selectors: testDetailsSelectors,
} = testDetailsSlice;
