import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IResponse {
	id: number;
	text: string;
}

interface IMultipleChooseScheme {
	responses: IResponse[];
}

const initialState: IMultipleChooseScheme = {
	responses: [{ id: 1, text: '' }],
};

export const multipleChooseSlice = createSlice({
	name: 'multipleChoose',
	initialState,
	selectors: {
		getResponses: (state: IMultipleChooseScheme) => state.responses,
	},
	reducers: {
		addResponse(state) {
			const newId = state.responses.length ? state.responses[state.responses.length - 1].id + 1 : 1;
			state.responses.push({ id: newId, text: '' });
		},
		removeResponse(state, action: PayloadAction<number>) {
			state.responses = state.responses.filter((response) => response.id !== action.payload);
		},
		updateResponseText(state, action: PayloadAction<{ id: number; text: string }>) {
			const response = state.responses.find((response) => response.id === action.payload.id);
			if (response) {
				response.text = action.payload.text;
			}
		},
		clearResponses(state) {
			state.responses = [];
		},
	},
});

export const {
	actions: multipleChooseActions,
	reducer: multipleChooseReducer,
} = multipleChooseSlice;
