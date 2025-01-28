import { IQuestion } from "../../questions/api/types";

export interface ICreateTestRequest {
	name: string,
	description: string,
	questions: IQuestion[]
}
