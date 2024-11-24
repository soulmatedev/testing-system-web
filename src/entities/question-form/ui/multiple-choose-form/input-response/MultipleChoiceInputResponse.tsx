import React, { ChangeEvent } from 'react';
import css from './MultipleChoiceInputResponse.module.scss';
import { SquareCheckboxInput } from '../../../../../shared/ui/square-checkbox-input/square-checkbox-input';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ReactComponent as CrossIcon } from '../../../../../shared/assets/images/cross-icon.svg';
import { IResponse } from '../../../model/slices/multipleChooseSlice';

interface MultipleChoiceInputResponseProps {
	response: IResponse;
	onDelete: (id: number) => void;
	onTextChange: (id: number, text: string) => void;
}

export const MultipleChoiceInputResponse: React.FC<MultipleChoiceInputResponseProps> = ({
	response,
	onDelete,
	onTextChange,
}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onTextChange(response.id, e.target.value);
	};

	return (
		<div className={css.wrapper}>
			<SquareCheckboxInput
				placeholder="Ответ"
				width={600}
				height={36}
				showCheckbox
				value={response.text}
				onChange={handleChange}
			/>
			<CrossIcon className={css.cross_icon} onClick={() => onDelete(response.id)} />
		</div>
	);
};
