import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITestDetailsState {
	title: string;
	description: string;
}

const initialState: ITestDetailsState = {
	title: '',
	description: '',
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
	},
});

export const {
	actions: testDetailsActions,
	reducer: testDetailsReducer,
	selectors: testDetailsSelectors,
} = testDetailsSlice;
