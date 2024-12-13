import { useSingleChoose } from '../../../model/hooks/useSingleChoose';
import { useMultipleChoose } from '../../../model/hooks/useMultipleChoose';

export const questionTypeHooks = {
	singleChoice: useSingleChoose,
	multipleChoice: useMultipleChoose,
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
	case 'singleChoice':
		return singleChoice;
	case 'multipleChoice':
		return multipleChoice;
	default:
		return noop;
	}
};
