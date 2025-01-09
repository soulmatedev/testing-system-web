export interface IPair {
	title: string,
	description: string,
}

export interface IOption {
	id: string,
	text: string,
	isCorrect: boolean,
}

export interface IQuestion {
	id: number,
	text: string,
	type: string,
	options: IOption[]
	pairs: IPair[]
}

export interface ICreateTestRequest {
	name: string,
	description: string,
	questions: IQuestion[]
}
