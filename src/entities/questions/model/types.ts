import { IQuestion } from '../api/types';

export interface IQuestionsState {
	questions: IQuestion[];
	currentQuestion: {
		text: string;
		type: string;
	};
}
