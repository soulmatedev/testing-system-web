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
