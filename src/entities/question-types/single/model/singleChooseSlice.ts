import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnswer } from '../../../questions/api/types';

interface ISingleChooseScheme {
	answers: IAnswer[];
}

let nextId = 1;

const initialState: ISingleChooseScheme = {
	answers: [{
		id: nextId++, text: '', weight: 0, isCorrect: false,
	}],
};

export const singleChooseSlice = createSlice({
	name: 'singleChoose',
	initialState,
	selectors: {
		getResponses: (state: ISingleChooseScheme) => state.answers,
	},
	reducers: {
		addResponse(state) {
			state.answers.push({
				id: nextId++, text: '', weight: 0, isCorrect: false,
			});
		},
		removeResponse(state, action: PayloadAction<number>) {
			state.answers = state.answers.filter(response => response.id !== action.payload);
		},
		updateResponseText(state, action: PayloadAction<IAnswer>) {
			const response = state.answers.find(res => res.id === action.payload.id);
			if (response) {
				response.text = action.payload.text;
				response.weight = action.payload.weight;
			}
		},
		clearResponses(state) {
			state.answers = [];
		},
	},
});

export const {
	actions: singleChooseActions,
	reducer: singleChooseReducer,
	selectors: singleChooseSelectors,
} = singleChooseSlice;
