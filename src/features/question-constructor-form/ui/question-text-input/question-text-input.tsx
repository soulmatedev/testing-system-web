import { useSelector } from 'react-redux';
import { TextArea } from '../../../../shared/ui/textarea';
import { getCurrentQuestion, questionsActions } from '../../../../entities/questions/model/slice';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';

const QUESTION_TEXTAREA_HEIGHT = 160;
const QUESTION_TEXTAREA_HEIGHT_WIDTH = 550;

export const QuestionTextInput = () => {
	const dispatch = useAppDispatch();
	const { text } = useSelector(getCurrentQuestion);

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value;
		dispatch(questionsActions.setCurrentQuestionText(newText));
	};

	return (
		<TextArea
			width={QUESTION_TEXTAREA_HEIGHT_WIDTH}
			height={QUESTION_TEXTAREA_HEIGHT}
			onChange={handleTextChange}
			placeholder="Вопрос"
			value={text}
		/>
	);
};
