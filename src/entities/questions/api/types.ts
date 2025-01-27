export interface IPairInput {
	title: string,
	description: boolean,
}

export interface IOptionInput {
	text: string,
	isCorrect: boolean,
}

export interface IQuestion {
	id: number,
	text: string,
	type: string,
	competency: string,
	options: IOptionInput[],
	pairs: IPairInput[],
}

export interface ICreateQuestionRequest {
	id: number,
	text: string,
	type: string,
	competency: string,
	options: IOptionInput[],
	pairs: IPairInput[],
}
