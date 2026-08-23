import { IQuestion } from '../../questions/api/types';
import { IUserResponse } from '../../user/auth/api/types';

export interface ITest {
	id: number;
	name: string;
	description: string;
	status: string;
	questions: IQuestion[];
	user: IUserResponse
	/** ISO-дата последнего изменения теста. */
	updatedAt: string;
	/**
	 * Сотруднику бэкенд отдаёт тесты в сокращённом виде (TestSummary) —
	 * там вместо списка вопросов приходит только их количество.
	 */
	questionsCount?: number;
}

export interface ICreateTestRequest {
	name: string;
	description: string;
	questions: number[];
	userId: number;
}

export interface ICreateTestResponse {
	test: ITest,
}

export interface ITestResult {
	id: number;
	userId: number;
	testId: number;
	questionsTotal: number;
	correctAnswers: number;
	completedAt: string;
}

export interface IUpdateTestRequest {
	id: number;
	name: string;
	description: string;
	questions: number[];
	userId: number;
}

export interface ICompleteTestRequest {
	userId: number;
	questionsTotal: number;
	correctAnswers: number;
}
