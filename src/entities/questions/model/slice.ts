import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from '../api/types';
import { IQuestionsState } from './types';

const initialState: IQuestionsState = {
	questions: [],
	currentQuestion: {
		text: '',
		type: 'chooseType',
	},
};

const questionsSlice = createSlice({
	name: 'questionsSlice',
	initialState,
	selectors: {
		getCurrentQuestion: (state) => state.currentQuestion,
	},
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
		setCurrentQuestionText: (state, action: PayloadAction<string>) => {
			state.currentQuestion.text = action.payload;
		},
		setCurrentQuestionType: (state, action: PayloadAction<string>) => {
			state.currentQuestion.type = action.payload;
		},
		clearCurrentQuestion: (state) => {
			state.currentQuestion.text = '';
			state.currentQuestion.type = 'chooseType';
		},
	},
});

export const {
	actions: questionsActions,
	reducer: questionsReducer,
	selectors: questionsSelectors,
} = questionsSlice;
