import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IResponse {
	id: number;
	text: string;
	weight: number,
}

interface ISingleChooseScheme {
	responses: IResponse[];
}

let nextId = 1;

const initialState: ISingleChooseScheme = {
	responses: [{ id: nextId++, text: '', weight: 0 }],
};

export const singleChooseSlice = createSlice({
	name: 'singleChoose',
	initialState,
	selectors: {
		getResponses: (state: ISingleChooseScheme) => state.responses,
	},
	reducers: {
		addResponse(state) {
			state.responses.push({ id: nextId++, text: '', weight: 0 });
		},
		removeResponse(state, action: PayloadAction<number>) {
			state.responses = state.responses.filter(response => response.id !== action.payload);
		},
		updateResponseText(state, action: PayloadAction<IResponse>) {
			const response = state.responses.find(res => res.id === action.payload.id);
			if (response) {
				response.text = action.payload.text;
				response.weight = action.payload.weight;
			}
		},
		clearResponses(state) {
			state.responses = [];
		},
	},
});

export const {
	actions: singleChooseActions,
	reducer: singleChooseReducer,
	selectors: singleChooseSelectors,
} = singleChooseSlice;
