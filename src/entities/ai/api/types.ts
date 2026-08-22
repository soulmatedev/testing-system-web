import { IAnswer } from '../../answers/api/types';
import { IPairInput } from '../../questions/api/types';

export interface IGenerateQuestionsRequest {
	topic: string;
	type: string;
	count: number;
}

export interface IGeneratedQuestion {
	text: string;
	type: string;
	answers: IAnswer[];
	pairs: IPairInput[];
}

export interface IGenerateQuestionsResponse {
	questions: IGeneratedQuestion[];
}
