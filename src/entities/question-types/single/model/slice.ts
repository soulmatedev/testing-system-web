import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnswer } from '../../../answers/api/types';
import { ISingleChooseScheme } from './types';

const initialState: ISingleChooseScheme = {
	answers: [],
};

export const singleChooseSlice = createSlice({
	name: 'singleChooseSlice',
	initialState,
	selectors: {
		getAnswers: (state: ISingleChooseScheme) => state.answers,
	},
	reducers: {
		addAnswer(state, action: PayloadAction<IAnswer>) {
			state.answers.push(action.payload);
		},
		removeAnswer(state, action: PayloadAction<number>) {
			state.answers = state.answers.filter(answer => answer.id !== action.payload);
		},
		updateAnswer(state, action: PayloadAction<Partial<IAnswer>>) {
			state.answers = state.answers.map(answer => ({
				...answer,
				...action.payload,
			}));
		},
		updateAnswerCorrectness(state, action: PayloadAction<{ id: number; isCorrect: boolean }>) {
			const answer = state.answers.find(a => a.id === action.payload.id);
			if (answer) {
				answer.isCorrect = action.payload.isCorrect;
			}
		},
		clearAnswers(state) {
			state.answers = [];
		},
	},
});

export const {
	actions: singleChooseActions,
	reducer: singleChooseReducer,
	selectors: singleChooseSelectors,
} = singleChooseSlice;
