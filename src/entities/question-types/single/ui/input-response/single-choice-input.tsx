import { ChangeEvent } from 'react';
import css from './single-choice-input.module.scss';
import { InputWithRoundedCheckbox } from '../../../../../shared/ui/input-with-rounded-checkbox';
import { ReactComponent as CrossIcon } from '../../../../../shared/assets/images/cross-icon.svg';
import { WeightDropdown } from '../../../../../shared/ui/weight-dropdown';
import { WeightValues } from '../../../../../shared/ui/weight-dropdown/weight-dropdown';
import { IAnswer } from '../../../../questions/api/types';

interface SingleChoiceInputResponseProps {
	response: IAnswer;
	index: number;
	onDelete: (id: number) => void;
	onAnswerChange: (answer: IAnswer) => void;
	onSelect: (id: number) => void;
	selected: boolean;
}

export const SingleChoiceInput = ({
	response,
	index,
	onDelete,
	onAnswerChange,
	onSelect,
	selected,
}: SingleChoiceInputResponseProps) => {
	const updateResponseText = (e: ChangeEvent<HTMLInputElement>) => {
		onAnswerChange({
			...response,
			text: e.target.value,
		});
	};

	const updateResponseWeight = (e: ChangeEvent<HTMLSelectElement>) => {
		const newWeight = Number(e.target.value);
		onAnswerChange({
			...response,
			weight: newWeight,
		});
	};

	const handleCheckboxChange = () => {
		onSelect(response.id);
	};

	return (
		<div className={css.wrapper}>
			<InputWithRoundedCheckbox
				placeholder="Ответ"
				width={600}
				height={36}
				showCheckbox
				value={response.text}
				onChange={updateResponseText}
				checked={selected}
				onCheckboxChange={handleCheckboxChange}
			/>
			<WeightDropdown
				placeholder="Вес"
				width={65}
				height={36}
				value={response.weight as WeightValues}
				onChange={updateResponseWeight}
			/>
			<CrossIcon className={css.cross_icon} onClick={() => onDelete(response.id)} />
		</div>
	);
};
