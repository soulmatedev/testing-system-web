import { ChangeEvent, useState } from 'react';
import css from './single-choice-input.module.scss';
import { InputWithRoundedCheckbox } from '../../../../../shared/ui/input-with-rounded-checkbox';
import { ReactComponent as CrossIcon } from '../../../../../shared/assets/images/cross-icon.svg';
import { WeightDropdown } from '../../../../../shared/ui/weight-dropdown';
import { WeightValues } from '../../../../../shared/ui/weight-dropdown/weight-dropdown';
import { IAnswer } from '../../../../answers/api/types';

interface SingleChoiceInputResponseProps {
	answer: IAnswer,
	index: number,
	onDelete: (id: number) => void,
	onAnswerChange: (answer: IAnswer) => void,
	onSelect: (id: number) => void,
	selected: boolean,
}

export const SingleChoiceInput = ({
	answer,
	index,
	onDelete,
	onAnswerChange,
	onSelect,
	selected,
}: SingleChoiceInputResponseProps) => {
	const [inputText, setInputText] = useState(answer.text);
	const [weight, setWeight] = useState(answer.weight);
	const [isCorrect, setIsCorrect] = useState(answer.isCorrect);

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

	const updateResponseIsCorrect = (checked: boolean) => {
		setIsCorrect(checked);
		onAnswerChange({
			...answer,
			isCorrect: checked,
		});
	};

	const handleCheckboxChange = (checked: boolean) => {
		updateResponseIsCorrect(checked);
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
				checked={isCorrect}
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
				<CrossIcon className={css.cross_icon} onClick={() => onDelete(answer.id)} />
			</div>
		</div>
	);
};
