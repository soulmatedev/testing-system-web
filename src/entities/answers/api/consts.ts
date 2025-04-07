export const URI_ANSWER = 'answer';

export const URI_BIND_ANSWER_TO_QUESTION = (
	questionId: number,
	answerId: number,
) => `${URI_ANSWER}/${answerId}/question/${questionId}`;
