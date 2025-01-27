import { ChangeEvent } from 'react';
import css from './SingleChoiceInputResponse.module.scss';
import { InputWithRoundedCheckbox } from '../../../../../shared/ui/input-with-rounded-checkbox';
import { ReactComponent as CrossIcon } from '../../../../../shared/assets/images/cross-icon.svg';
import { IResponse } from '../../../model/slices/singleChooseSlice';
import { WeightDropdown } from '../../../../../shared/ui/weight-dropdown';
import { WeightValues } from '../../../../../shared/ui/weight-dropdown/weight-dropdown';

interface SingleChoiceInputResponseProps {
	response: IResponse;
	index: number;
	onDelete: (id: number) => void;
	onAnswerChange: (id: number, text: string, weight: number) => void;
	onSelect: (id: number) => void;
	selected: boolean;
}

export const SingleChoiceInputResponse = ({
	response,
	index,
	onDelete,
	onAnswerChange,
	onSelect,
	selected,
}: SingleChoiceInputResponseProps) => {
	const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
		onAnswerChange(response.id, e.target.value, response.weight);
	};

	const handleWeightChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newWeight = Number(e.target.value);
		onAnswerChange(response.id, response.text, newWeight);
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
				onChange={handleAnswerChange}
				checked={selected}
				onCheckboxChange={handleCheckboxChange}
			/>
			<WeightDropdown
				placeholder="Вес"
				width={60}
				height={36}
				value={response.weight as WeightValues}
				onChange={handleWeightChange}
			/>
			<CrossIcon className={css.cross_icon} onClick={() => onDelete(response.id)} />
		</div>
	);
};
