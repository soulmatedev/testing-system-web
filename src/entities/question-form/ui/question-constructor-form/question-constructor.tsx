import { useState } from 'react';
import css from './question-constructor.module.scss';
import { TextArea } from '../../../../shared/ui/textarea';
import { QuestionTypeDropdown } from '../../../question-type/ui/question-type-dropdown';
import { QuestionFormRenderer } from '../../../../features/question-form-renderer/QuestionFormRenderer';
import { QuestionType } from './hooks/useQuestionType';
import { CreateQuestionButton } from './ui/create-question-button';
import { IQuestion } from '../../../questions/api/types';
import { AddCompetenciesButton } from './ui/add-competencies-button';

interface QuestionFormProps {
	onNewQuestionCreated: (newQuestion: IQuestion) => void;
}

export const QuestionConstructor = ({ onNewQuestionCreated } : QuestionFormProps) => {
	const QUESTION_TEXTAREA_HEIGHT = 160;
	const QUESTION_TEXTAREA_HEIGHT_WIDTH = 550;

	const [questionText, setQuestionText] = useState<string>('');
	const [questionType, setQuestionType] = useState<QuestionType>('chooseType');
	const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

	const handleQuestionTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setQuestionType(event.target.value as QuestionType);
	};

	return (
		<>
			<div className={css.wrapper}>
				<div className={css.block}>
					<div className={css.left_side}>
						<TextArea
							width={QUESTION_TEXTAREA_HEIGHT_WIDTH}
							height={QUESTION_TEXTAREA_HEIGHT}
							onChange={(e) => setQuestionText(e.target.value)}
							placeholder="Вопрос"
							value={questionText}
						/>
						<AddCompetenciesButton />
					</div>
					<div className={css.right_side}>
						<div className={css.dropdowns}>
							<QuestionTypeDropdown onChange={handleQuestionTypeChange} />
							{/* <CompetenciesTypeDropdown onChange={handleCompetencyChange} /> */}
						</div>
						<CreateQuestionButton
							questionType={questionType}
							questionText={questionText}
							onNewQuestionCreated={onNewQuestionCreated}
						/>
					</div>
				</div>
			</div>

			{questionType !== 'chooseType' && (
				<QuestionFormRenderer questionType={questionType} questionId={activeQuestionId} />
			)}
		</>
	);
};
