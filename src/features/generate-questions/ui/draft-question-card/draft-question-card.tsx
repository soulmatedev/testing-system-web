import React from 'react';
import css from './draft-question-card.module.scss';
import { TextArea } from '../../../../shared/ui/textarea';
import { Input } from '../../../../shared/ui/input';
import { InputTypes } from '../../../../shared/ui/input/InputTypes';
import { SquareCheckbox } from '../../../../shared/ui/square-checkbox';
import { MainButton } from '../../../../shared/ui/main-button';
import { SecondButton } from '../../../../shared/ui/second-button';
import { IDraftQuestion } from '../../model/types';

interface DraftQuestionCardProps {
	draft: IDraftQuestion;
	onChange: (changes: Partial<IDraftQuestion>) => void;
	onSave: () => void;
	onDiscard: () => void;
}

export const DraftQuestionCard = (props: DraftQuestionCardProps) => {
	const {
		draft, onChange, onSave, onDiscard,
	} = props;

	// answers-редактор показываем только для типов, где есть варианты ответа.
	// Для matching/open — упрощённое текстовое поле (см. model/types.ts).
	const isChoiceType = draft.type === 'single' || draft.type === 'multiple';

	const updateAnswerText = (index: number, text: string) => {
		const answers = draft.answers.map((answer, i) => (i === index ? { ...answer, text } : answer));
		onChange({ answers });
	};

	const toggleAnswerCorrect = (index: number) => {
		const answers = draft.answers.map((answer, i) => (
			i === index ? { ...answer, isCorrect: !answer.isCorrect } : answer
		));
		onChange({ answers });
	};

	return (
		<div className={css.card}>
			<TextArea
				placeholder="Текст вопроса"
				value={draft.text}
				onChange={(e) => onChange({ text: e.target.value })}
				height={100}
			/>

			{isChoiceType && (
				<ul className={css.answers}>
					{draft.answers.map((answer, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<li key={index} className={css.answer_row}>
							<SquareCheckbox
								checked={answer.isCorrect}
								onChange={() => toggleAnswerCorrect(index)}
							/>
							{/* Input не принимает className, ширину строки задаём через обёртку */}
							<div className={css.answer_input}>
								<Input
									type={InputTypes.TEXT}
									placeholder="Вариант ответа"
									value={answer.text}
									onChange={(e) => updateAnswerText(index, e.target.value)}
								/>
							</div>
						</li>
					))}
				</ul>
			)}

			<div className={css.actions}>
				<SecondButton text="Удалить" onClick={onDiscard} />
				<MainButton text="Сохранить в библиотеку" onClick={onSave} />
			</div>
		</div>
	);
};
