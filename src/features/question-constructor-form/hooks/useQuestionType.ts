import { useSingleChoose } from '../../../entities/question-types/single';
import { useMultipleChoose } from '../../../entities/question-types/multiple';

export const questionTypeHooks = {
	single: useSingleChoose,
	multiple: useMultipleChoose,
};

export type QuestionType = keyof typeof questionTypeHooks | 'chooseType';

export interface IUseQuestionTypeProps {
	questionType: QuestionType;
}

// Пустые хуки для обеспечения одинакового порядка вызовов
const useNoop = () => ({
	getResponses: () => [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	clearResponses: () => {},
});

export const useQuestionType = ({ questionType }: IUseQuestionTypeProps) => {
	// Гарантируем вызов всех хуков
	const singleChoice = useSingleChoose();
	const multipleChoice = useMultipleChoose();
	const noop = useNoop();

	switch (questionType) {
	case 'single':
		return singleChoice;
	case 'multiple':
		return multipleChoice;
	default:
		return noop;
	}
};
