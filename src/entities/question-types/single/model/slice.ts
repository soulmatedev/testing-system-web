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
			state.answers = [...state.answers, action.payload];
		},
		removeAnswer(state, action: PayloadAction<number>) {
			state.answers = state.answers.filter(answer => answer.id !== action.payload);
		},
		updateAnswer(state, action: PayloadAction<Partial<IAnswer>>) {
			const index = state.answers.findIndex(answer => answer.id === action.payload.id);
			if (index !== -1) {
				const updatedAnswer: IAnswer = {
					...state.answers[index],
					...action.payload,
				};
				state.answers[index] = updatedAnswer;
			}
		},
		updateAnswerCorrectness(state, action: PayloadAction<{ id: number; isCorrect: boolean }>) {
			const { id, isCorrect } = action.payload;
			const answer = state.answers.find(answer => answer.id === id);
			if (answer) {
				answer.isCorrect = isCorrect;
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
