export interface ICompetency {
	id: number
	name: string,
	description: string,
}

export interface ICompetencyRequest {
	id: number
	name: string,
	description: string,
}

export interface ICreateCompetencyResponse {
	competency: ICompetency,
}

export interface ICreateCompetencyRequest {
	name: string,
	description: string,
}

export interface ICompetencyResponse {
	competencies: ICompetency[],
}

export interface IUpdateCompetencyRequest {
	id: number,
	name: string,
	description: string,
}

export interface IUpdateCompetencyResponse {
	competency: ICompetency,
}

export interface IBindCompetencyToAnswer {
	competencyID: number,
	answerID: number
}
