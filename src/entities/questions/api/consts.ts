export const URI_QUESTION = 'question';

export const URI_QUESTION_CREATE = `${URI_QUESTION}/create`;
export const URI_QUESTION_GET_ALL = `${URI_QUESTION}/all-questions`;

export const URI_BIND_QUESTION_TO_TEST = (
	questionId: number,
	testId: number,
) => `${URI_QUESTION}/${questionId}/question/${testId}`;
