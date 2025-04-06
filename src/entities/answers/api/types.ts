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
	questionId: number,
}

export interface IAnswerResponse {
	answer: IAnswer,
}

export interface IBindAnswerToQuestion {
	questionId: number,
	answerId: number
}
