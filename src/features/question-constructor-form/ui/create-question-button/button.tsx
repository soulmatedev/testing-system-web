import { useSelector } from 'react-redux';
import { useCreateQuestion } from '../../hooks';
import { MainButton } from '../../../../shared/ui/button';
import { questionsSelectors } from '../../../../entities/questions/model/slice';

export const CreateQuestionButton = () => {
	const { text, type } = useSelector(questionsSelectors.getCurrentQuestion);

	const { createQuestion } = useCreateQuestion();

	const onCreateQuestion = async () => {
		if (text && type !== 'chooseType') {
			await createQuestion();
		}
	};

	return (
		<MainButton
			text="Сохранить"
			disabled={type === 'chooseType' || !text}
			onClick={onCreateQuestion}
		/>
	);
};
