import React, { ChangeEvent, useState } from 'react';
import css from './single-choice-input.module.scss';
import { InputWithRoundedCheckbox } from '../../../../../shared/ui/input-with-rounded-checkbox';
import { ReactComponent as TrashIcon } from '../../../../../shared/assets/images/trash.svg';
import { WeightDropdown } from '../../../../../shared/ui/weight-dropdown';
import { WeightValues } from '../../../../../shared/ui/weight-dropdown/weight-dropdown';
import { IAnswer } from '../../../../answers/api/types';

interface SingleChoiceInputResponseProps {
	answer: IAnswer,
	onDelete: (id: number) => void,
	onAnswerChange: (answer: IAnswer) => void,
	onSelect: (id: number) => void,
}

export const SingleChoiceInput = ({
	answer,
	onDelete,
	onAnswerChange,
	onSelect,
}: SingleChoiceInputResponseProps) => {
	const [inputText, setInputText] = useState(answer.text);
	const [weight, setWeight] = useState(answer.weight);

	const updateResponseText = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
		onAnswerChange({
			...answer,
			text: e.target.value,
		});
	};

	const updateResponseWeight = (e: ChangeEvent<HTMLSelectElement>) => {
		setWeight(Number(e.target.value));
		onAnswerChange({
			...answer,
			weight: Number(e.target.value),
		});
	};

	const handleCheckboxChange = () => {
		onSelect(answer.id);
	};

	return (
		<div className={css.wrapper}>
			<InputWithRoundedCheckbox
				placeholder="Ответ"
				height={36}
				showCheckbox
				value={inputText}
				onChange={updateResponseText}
				checked={answer.isCorrect}
				onCheckboxChange={handleCheckboxChange}
			/>
			<WeightDropdown
				placeholder="Вес"
				width={65}
				height={36}
				value={weight as WeightValues}
				onChange={updateResponseWeight}
			/>
			<div className={css.delete}>
				<TrashIcon className={css.trash_icon} onClick={() => onDelete(answer.id)} />
			</div>
		</div>
	);
};
