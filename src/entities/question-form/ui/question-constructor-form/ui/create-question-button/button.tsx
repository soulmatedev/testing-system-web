import { MainButton } from '../../../../../../shared/ui/button';
import { QuestionType } from '../../hooks/useQuestionType';
import { useCreateQuestion } from '../../hooks/useCreateQuestion';
import { IQuestion } from '../../../../../questions/api/types';

interface ICreateQuestionButtonProps {
	questionType: QuestionType,
	questionText: string,
	onNewQuestionCreated: (newQuestion: IQuestion) => void,
	question?: IQuestion,
}

export const CreateQuestionButton = (props: ICreateQuestionButtonProps) => {
	const {
		questionType,
		questionText,
		onNewQuestionCreated,
		question,
	} = props;

	const { options = [], pairs = [] } = question || {};

	const { createQuestion } = useCreateQuestion();

	const onCreateQuestion = async () => {
		if (questionText && questionType !== 'chooseType') {
			const createdQuestion = await createQuestion(
				{
					id: Date.now(),
					text: questionText,
					type: questionType,
					competency: '',
					options,
					pairs,
				},
			);

			console.log(createdQuestion);
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
