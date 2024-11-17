import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './QuestionForm.module.scss';
import { TextArea } from '../textarea/textarea';
import { QuestionTypeDropdown } from '../question-type-dropdown/QuestionTypeDropdown';
import { MainButton } from '../button/button';
import { QuestionFormRenderer } from '../question-form-renderer/QuestionFormRenderer';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as BackArrow } from '../../shared/images/back-arrow.svg';

export const QuestionForm = () => {
	const navigate = useNavigate();

	const QUESTION_TEXTAREA_HEIGHT = 200;
	const QUESTION_TEXTAREA_HEIGHT_WIDTH = 600;

	const [questionType, setQuestionType] = useState<string>('chooseType');

	const handleQuestionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setQuestionType(event.target.value);
	};

	const goBack = () => {
		navigate(-1);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			goBack();
		}
	};

	return (
		<>
			<div className={css.wrapper}>
				<div className={css.options}>
					<div
						role="button"
						className={css.go_back}
						onKeyDown={handleKeyDown}
						onClick={goBack}
						tabIndex={0}
					>
						<BackArrow className={css.back_arrow} />
						<p>Вернуться назад</p>
					</div>
					<MainButton text="Создать тест" />
				</div>
				<div className={css.block}>
					<TextArea
						width={QUESTION_TEXTAREA_HEIGHT_WIDTH}
						height={QUESTION_TEXTAREA_HEIGHT}
						placeholder="Вопрос"
					/>
					<div className={css.right_side}>
						<QuestionTypeDropdown onChange={handleQuestionTypeChange} />
						<MainButton text="Новый вопрос" disabled={questionType === 'chooseType'} />
					</div>
				</div>
			</div>

			<QuestionFormRenderer questionType={questionType} />
		</>
	);
};
