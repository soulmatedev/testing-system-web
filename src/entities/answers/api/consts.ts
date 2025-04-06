export const URI_ANSWER = 'answer';

export const URI_BIND_ANSWER_TO_QUESTION = (
	questionId: number,
	answerID: number,
) => `${URI_ANSWER}/${answerID}/question/${questionId}`;
