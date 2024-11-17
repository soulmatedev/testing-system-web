import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IResponseState {
	responses: string[];
}

const initialState: IResponseState = {
	responses: [''],
};

const responsesSlice = createSlice({
	name: 'responses',
	initialState,
	reducers: {
		addResponse(state: IResponseState) {
			state.responses.push('');
		},
		removeResponse(state, action: PayloadAction<number>) {
			state.responses.splice(action.payload, 1);
		},
	},
});

export const { actions: responsesActions, reducer: responsesReducer } = responsesSlice;
