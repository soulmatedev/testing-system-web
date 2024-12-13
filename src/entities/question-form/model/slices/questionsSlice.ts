import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAnswer {
	id: number;
	text: string;
}

export interface IQuestion {
	id: number;
	text: string;
	type: string;
	answers: IAnswer[];
}

interface IQuestionsState {
	questions: IQuestion[];
}

let nextQuestionId = 1;

const initialState: IQuestionsState = {
	questions: [],
};

export const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		addQuestion(state, action: PayloadAction<{ text: string; type: string; answers: IAnswer[] }>) {
			const newQuestion = {
				id: nextQuestionId++,
				text: action.payload.text,
				type: action.payload.type,
				answers: action.payload.answers || [],
			};
			state.questions.push(newQuestion);
		},
		resetQuestions(state) {
			state.questions = [];
		},
	},
});

export const {
	actions: questionsActions,
	reducer: questionsReducer,
	selectors: questionsSelectors,
} = questionsSlice;
