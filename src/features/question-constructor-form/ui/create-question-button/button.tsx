import { QuestionType } from '../../hooks/useQuestionType';
import { IQuestion } from '../../../../entities/questions/api/types';
import { useCreateQuestion } from '../../hooks';
import { MainButton } from '../../../../shared/ui/button';

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

	const { answers = [], pairs = [] } = question || {};

	const { createQuestion } = useCreateQuestion();

	const onCreateQuestion = async () => {
		if (questionText && questionType !== 'chooseType') {
			const createdQuestion = await createQuestion(
				{
					id: Date.now(),
					text: questionText,
					type: questionType,
					competency: '',
					answers,
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
