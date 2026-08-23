import { questionsActions } from '../../../entities/questions/model/slice';
import { singleChooseActions } from '../../../entities/question-types/single/model/slice';
import { IQuestion } from '../../../entities/questions/api/types';
import { useAppDispatch } from '../../../shared/libs/utils/redux';

/**
 * Загружает существующий вопрос в форму конструктора: карточка «Новый вопрос»
 * переключается в режим редактирования, а «Сохранить» вызывает update
 * вместо create (см. useCreateQuestion — он смотрит на currentQuestion.id).
 */
export const useEditQuestion = () => {
	const dispatch = useAppDispatch();

	const startEditQuestion = (question: IQuestion) => {
		dispatch(questionsActions.setCurrentQuestionId(question.id));
		dispatch(questionsActions.setCurrentQuestionText(question.text));
		dispatch(questionsActions.setCurrentQuestionType(question.type));

		// Варианты ответа редактируются через слайс своего типа вопроса,
		// поэтому переносим их туда целиком.
		dispatch(singleChooseActions.clearAnswers());
		question.answers?.forEach((answer) => {
			dispatch(singleChooseActions.addAnswer(answer));
		});
	};

	return { startEditQuestion };
};
