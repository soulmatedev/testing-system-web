export interface IPairInput {
	title: string,
	description: boolean,
}

export interface IOptionInput {
	text: string,
	isCorrect: boolean,
}

export interface ICreateQuestionRequest {
	id: number,
	text: string,
	type: string,
	options: IOptionInput[],
	pairs: IPairInput[],
}
