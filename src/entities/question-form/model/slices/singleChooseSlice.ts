import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IResponse {
	id: number;
	text: string;
}

interface ISingleChooseScheme {
	responses: IResponse[];
}

let nextId = 1;

const initialState: ISingleChooseScheme = {
	responses: [{ id: nextId++, text: '' }],
};

export const singleChooseSlice = createSlice({
	name: 'singleChoose',
	initialState,
	selectors: {
		getResponses: (state: ISingleChooseScheme) => state.responses,
	},
	reducers: {
		addResponse(state) {
			state.responses.push({ id: nextId++, text: '' });
		},
		removeResponse(state, action: PayloadAction<number>) {
			state.responses = state.responses.filter(response => response.id !== action.payload);
		},
		updateResponseText(state, action: PayloadAction<{ id: number; text: string }>) {
			const response = state.responses.find(res => res.id === action.payload.id);
			if (response) {
				response.text = action.payload.text;
			}
		},
	},
});

export const {
	actions: singleChooseActions,
	reducer: singleChooseReducer,
	selectors: singleChooseSelectors,
} = singleChooseSlice;
