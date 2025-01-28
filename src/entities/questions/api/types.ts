export interface IPairInput {
	title: string,
	description: boolean,
}

export interface IAnswer {
	id: number,
	text: string,
	isCorrect: boolean,
	weight: number,
}

export interface IQuestion {
	id: number,
	text: string,
	type: string,
	competency: string,
	answers: IAnswer[],
	pairs: IPairInput[],
}

export interface ICreateQuestionRequest {
	id: number,
	text: string,
	type: string,
	competency: string,
	answers: IAnswer[],
	pairs: IPairInput[],
}
