import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { TextArea } from '../../../../shared/ui/textarea';
import { getCurrentQuestion, questionsActions } from '../../../../entities/questions/model/slice';
import { useAppDispatch } from '../../../../shared/libs/utils/redux';
import { useCreateQuestion } from '../../hooks';

const QUESTION_TEXTAREA_HEIGHT = 160;
const QUESTION_TEXTAREA_HEIGHT_WIDTH = 550;

export const QuestionTextInput = () => {
	const dispatch = useAppDispatch();
	const { text } = useSelector(getCurrentQuestion);

	const { createOrUpdateQuestion } = useCreateQuestion();
	const isDraftCreated = useRef(false);

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value;
		dispatch(questionsActions.setCurrentQuestionText(newText));

		if (!isDraftCreated.current && newText.length === 1) {
			createOrUpdateQuestion(newText).then((res) => {
				if (res?.id) {
					dispatch(questionsActions.setCurrentQuestionId(res.id));
					isDraftCreated.current = true;
				}
			});
		}
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
