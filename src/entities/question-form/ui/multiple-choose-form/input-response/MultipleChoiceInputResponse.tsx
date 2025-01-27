import React, { ChangeEvent } from 'react';
import css from './MultipleChoiceInputResponse.module.scss';
import { SquareCheckboxInput } from '../../../../../shared/ui/square-checkbox-input';
import { ReactComponent as CrossIcon } from '../../../../../shared/assets/images/cross-icon.svg';
import { IResponse } from '../../../model/slices/multipleChooseSlice';
import { WeightDropdown, WeightValues } from '../../../../../shared/ui/weight-dropdown/weight-dropdown';

interface MultipleChoiceInputResponseProps {
	response: IResponse;
	onDelete: (id: number) => void;
	onAnswerChange: (id: number, text: string, weight: number) => void;
}

export const MultipleChoiceInputResponse: React.FC<MultipleChoiceInputResponseProps> = ({
	response,
	onDelete,
	onAnswerChange,
}) => {
	const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
		onAnswerChange(response.id, e.target.value, response.weight);
	};

	const handleWeightChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newWeight = Number(e.target.value);
		onAnswerChange(response.id, response.text, newWeight);
	};

	return (
		<div className={css.wrapper}>
			<SquareCheckboxInput
				placeholder="Ответ"
				width={600}
				height={36}
				showCheckbox
				value={response.text}
				onChange={handleAnswerChange}
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
