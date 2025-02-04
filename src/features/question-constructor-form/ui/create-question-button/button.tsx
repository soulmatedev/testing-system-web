import { QuestionType } from '../../hooks/useQuestionType';
import { IQuestion } from '../../../../entities/questions/api/types';
import { useCreateQuestion } from '../../hooks';
import { MainButton } from '../../../../shared/ui/button';

interface ICreateQuestionButtonProps {
	questionType: QuestionType,
	questionText: string,
	onNewQuestionCreated: (newQuestion: IQuestion) => void,
}

export const CreateQuestionButton = (props: ICreateQuestionButtonProps) => {
	const {
		questionType,
		questionText,
		onNewQuestionCreated,
	} = props;

	const { createQuestion } = useCreateQuestion();

	const onCreateQuestion = async () => {
		if (questionText && questionType !== 'chooseType') {
			await createQuestion();
		}
	};

	return (
		<MainButton
			text="Сохранить"
			disabled={questionType === 'chooseType' || !questionText}
			onClick={onCreateQuestion}
		/>
	);
};
