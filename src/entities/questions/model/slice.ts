import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from '../api/types';
import { IQuestionsState } from './types';
import { RootState } from '../../../app/reducers';

const initialState: IQuestionsState = {
	questions: [],
	currentQuestion: {
		id: 0,
		text: '',
		type: 'chooseType',
		answers: [],
		pairs: [],
	},
};

const questionsSlice = createSlice({
	name: 'questionsSlice',
	initialState,
	selectors: {
		getCurrentQuestionId: (state: { currentQuestion: IQuestion }) => state.currentQuestion.id,
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
		setCurrentQuestionId(state, action: PayloadAction<number>) {
			state.currentQuestion.id = action.payload;
		},
		clearCurrentQuestion: (state) => {
			state.currentQuestion.id = 0;
			state.currentQuestion.text = '';
			state.currentQuestion.type = '';
			state.currentQuestion.answers = [];
			state.currentQuestion.pairs = [];
		},
	},
});

export const {
	actions: questionsActions,
	reducer: questionsReducer,
	selectors: questionsSelectors,
} = questionsSlice;

export const getCurrentQuestion = (state: RootState) => state.questionsSlice.currentQuestion;
