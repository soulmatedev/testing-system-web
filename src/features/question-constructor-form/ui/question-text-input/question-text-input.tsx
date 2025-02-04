import { useSelector } from 'react-redux';
import { TextArea } from '../../../../shared/ui/textarea';
import { questionsActions, questionsSelectors } from '../../../../entities/questions/model/slice';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';

const QUESTION_TEXTAREA_HEIGHT = 160;
const QUESTION_TEXTAREA_HEIGHT_WIDTH = 550;

export const QuestionTextInput = () => {
	const dispatch = useAppDispatch();

	const { text } = useSelector(questionsSelectors.getCurrentQuestion);

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(questionsActions.setCurrentQuestionText(e.target.value));
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
