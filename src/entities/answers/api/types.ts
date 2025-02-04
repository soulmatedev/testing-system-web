export interface IAnswer {
	id: number,
	text: string,
	isCorrect: boolean,
	weight: number,
}

export interface ICreateAnswer {
	text: string,
	isCorrect: boolean,
	weight: number,
}

export interface IAnswerRequest {
	id: number,
	text: string,
	isCorrect: boolean,
	weight: number,
}
