export const URI_COMPETENCY = 'competency';

export const URI_CREATE_COMPETENCY = `${URI_COMPETENCY}/create`;
export const URI_GET_COMPETENCIES = `${URI_COMPETENCY}/get`;
export const URI_DELETE_COMPETENCY = `${URI_COMPETENCY}/delete`;
export const URI_UPDATE_COMPETENCY = `${URI_COMPETENCY}/update`;
export const URI_GET_COMPETENCIES_BY_ANSWER = `${URI_COMPETENCY}/by-answer`;
export const URI_BIND_COMPETENCY_TO_ANSWER = (
	competencyID: number,
	answerID: number,
) => `${URI_COMPETENCY}/${answerID}/competency/${competencyID}`;
