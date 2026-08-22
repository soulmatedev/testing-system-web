import React from 'react';
import css from './generate-questions-modal.module.scss';
import { Modal } from '../../../shared/ui/modal';
import { Input } from '../../../shared/ui/input';
import { InputTypes } from '../../../shared/ui/input/InputTypes';
import { QuestionTypeDropdown } from '../../../shared/ui/question-type-dropdown';
import { MainButton } from '../../../shared/ui/main-button';
import { useGenerateQuestions } from '../hooks/useGenerateQuestions';
import { DraftQuestionCard } from './draft-question-card';

interface GenerateQuestionsModalProps {
	active: boolean;
	closeFunc: (active: boolean) => void;
}

export const GenerateQuestionsModal = (props: GenerateQuestionsModalProps) => {
	const { active, closeFunc } = props;

	const {
		topic, setTopic,
		type, setType,
		count, setCount,
		drafts,
		isGenerating,
		runGeneration,
		updateDraft,
		discardDraft,
		saveDraft,
	} = useGenerateQuestions();

	return (
		<Modal active={active} closeFunc={closeFunc} styles={css.modal}>
			<p className={css.title}>Генерация вопросов с помощью ИИ</p>

			<div className={css.form}>
				<div className={css.topic_field}>
					<Input
						type={InputTypes.TEXT}
						placeholder="Тема, например: Фишинг и социальная инженерия"
						value={topic}
						onChange={(e) => setTopic(e.target.value)}
					/>
				</div>
				<div className={css.type_field}>
					<QuestionTypeDropdown value={type} onChange={setType} />
				</div>
				<div className={css.count_field}>
					<Input
						type={InputTypes.TEXT}
						placeholder="Кол-во"
						value={String(count)}
						onChange={(e) => setCount(Number(e.target.value) || 1)}
					/>
				</div>
				<MainButton
					text={isGenerating ? 'Генерируем...' : 'Сгенерировать'}
					onClick={runGeneration}
					disabled={isGenerating}
					height={40}
				/>
			</div>

			<div className={css.drafts}>
				{drafts.map((draft) => (
					<DraftQuestionCard
						key={draft.draftId}
						draft={draft}
						onChange={(changes) => updateDraft(draft.draftId, changes)}
						onSave={() => saveDraft(draft.draftId)}
						onDiscard={() => discardDraft(draft.draftId)}
					/>
				))}
			</div>
		</Modal>
	);
};
