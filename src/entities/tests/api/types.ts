import { IQuestion } from '../../questions/api/types';

export interface ITest {
	id: number;
	name: string;
	description: string;
	questions: IQuestion[];
}

export interface ICreateTestRequest {
	name: string;
	description: string;
	questions: number[];
}

export interface ICreateTestResponse {
	test: ITest,
}

export interface IUpdateTestRequest {
	id: number;
	name: string;
	description: string;
	questions: number[];
}
