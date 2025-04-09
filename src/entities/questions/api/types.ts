import { IAnswer } from '../../answers/api/types';

export interface IPairInput {
	title: string,
	description: boolean,
}

export interface IQuestion {
	id: number,
	text: string,
	type: string,
	answers: IAnswer[],
	pairs: IPairInput[],
}

export interface ICreateQuestionRequest {
	text: string,
	type: string,
	answers: IAnswer[],
	pairs: IPairInput[],
}

export interface IGetQuestionsResponse {
	questions: IQuestion[];
}

export interface IGetQuestionsRequest {
	limit: number,
	page: number,
	search?: string,
}
