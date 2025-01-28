import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from '../../api/types';

interface IQuestionsState {
	questions: IQuestion[];
}

const initialState: IQuestionsState = {
	questions: [],
};

const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setQuestions: (state, action: PayloadAction<IQuestion[]>) => {
			state.questions = action.payload;
		},
		addQuestion: (state, action: PayloadAction<IQuestion>) => {
			state.questions.push(action.payload);
		},
		updateQuestion: (state, action: PayloadAction<IQuestion>) => {
			const index = state.questions.findIndex((q) => q.id === action.payload.id);
			if (index !== -1) {
				state.questions[index] = action.payload;
			}
		},
		removeQuestion: (state, action: PayloadAction<number>) => {
			state.questions = state.questions.filter((q) => q.id !== action.payload);
		},
	},
});

export const {
	actions: questionsActions,
	reducer: questionsReducer,
} = questionsSlice;
