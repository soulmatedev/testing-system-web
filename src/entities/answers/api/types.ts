export interface IAnswer {
	id: number,
	text: string,
	isCorrect: boolean,
	weight: number,
}

export interface IAnswerRequest {
	text: string,
	isCorrect: boolean,
	weight: number,
}

export interface IAnswerResponse {
	answer: IAnswer,
}
